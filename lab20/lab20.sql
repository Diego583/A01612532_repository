--Materiales(Clave, Descripción, Costo)
--Proveedores(RFC, RazonSocial)
--Proyectos(Numero,Denominacion)
--Entregan(Clave, RFC, Numero, Fecha, Cantidad)

--Consulta de un tabla completa
select * from materiales

--Selección
select * from materiales
where clave=1000

--Proyección
select clave,rfc,fecha from entregan

--Reunión Natural
select * from materiales,entregan
where materiales.clave = entregan.clave

--Reunión con criterio específico
select * from entregan,proyectos
where entregan.numero < = proyectos.numero

--Unión
(select * from entregan where clave=1450)
union
(select * from entregan where clave=1300)
--¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.
select * from entregan where clave=1450 OR clave=1300

--Intersección
(select clave from entregan where numero=5001)
intersect
(select clave from entregan where numero=5018)

--Diferencia
(select * from entregan)
except 
(select * from entregan where clave=1000)

--Producto cartesiano
select * from entregan,materiales

--Construcción de consultas a partir de una especificación
--Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.
set dateformat dmy
SELECT descripcion
FROM materiales M, entregan E
WHERE M.Clave = E.Clave 
AND Fecha BETWEEN '01/01/00' AND '31/12/00'

--Uso del calificador distinct
SELECT DISTINCT descripcion
FROM materiales M, entregan E
WHERE M.Clave = E.Clave 
AND Fecha BETWEEN '01/01/00' AND '31/12/00'

--Ordenamientos
/*Obtén los números y denominaciones de los proyectos con las fechas y cantidades de sus entregas,
ordenadas por número de proyecto, presentando las fechas de la más reciente a la más antigua.*/
SELECT P.Numero, denominacion, Fecha, Cantidad
FROM Proyectos P, Entregan E
WHERE P.Numero = E.Numero
ORDER BY Numero ASC, Fecha DESC

--Operadores de cadena
SELECT * FROM Materiales where Descripcion LIKE 'Si%'

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';

--Operadores Lógicos.
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
Exists ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

--Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador IN
SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
RFC IN ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

/*Tomando de base la consulta anterior del EXISTS, 
realiza el query que devuelva el mismo resultado, 
pero usando el operador NOT IN */
SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
RFC NOT IN ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial NOT LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

--Realiza un ejemplo donde apliques algún operador : ALL, SOME o ANY.
SELECT descripcion, Cantidad
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave
AND E.Clave LIKE '10%'
AND Cantidad > ANY (SELECT Cantidad
FROM Entregan E2
WHERE E2.Clave NOT LIKE '10%')
ORDER BY Cantidad DESC

--¿Qué hace la siguiente sentencia?
SELECT TOP 2 * FROM Proyectos

--¿Qué sucede con la siguiente consulta? 
SELECT TOP Numero FROM Proyectos

--Modificando la estructura de un tabla existente.
ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2);
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;

/*¿Qué consulta usarías para obtener el importe de las entregas es decir, 
el total en dinero de lo entregado, basado en la cantidad de la entrega y el precio del material y el impuesto asignado?*/
SELECT (E.cantidad * M.costo + (E.cantidad * M.costo * (M.PorcentajeImpuesto/100))) as Importe
from Materiales M, Entregan E
WHERE M.Clave = E.Clave

--Creación de vistas
--1
CREATE VIEW totalDinero AS 
SELECT (E.cantidad * M.costo + (E.cantidad * M.costo * (M.PorcentajeImpuesto/100))) as Importe
from Materiales M, Entregan E
WHERE M.Clave = E.Clave

SELECT * FROM totalDinero
--2
CREATE VIEW operadorANY AS 
SELECT descripcion, Cantidad
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave
AND E.Clave LIKE '10%'
AND Cantidad > ANY (SELECT Cantidad
FROM Entregan E2
WHERE E2.Clave NOT LIKE '10%')

SELECT * FROM operadorANY
ORDER BY Cantidad DESC
--3
CREATE VIEW top2Numero AS 
SELECT TOP 2 * FROM Proyectos

SELECT * FROM top2Numero
--4
CREATE VIEW opreadorNOTIN AS 
SELECT RFC,Cantidad, Fecha,Numero
FROM [Entregan]
WHERE [Numero] Between 5000 and 5010 AND
RFC NOT IN ( SELECT [RFC]
FROM [Proveedores]
WHERE RazonSocial NOT LIKE 'La%' and [Entregan].[RFC] = [Proveedores].[RFC] )

SELECT * FROM opreadorNOTIN
--5
CREATE VIEW likeA_D AS 
SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';

SELECT * FROM likeA_D

--Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".
SELECT M.clave, descripcion
FROM materiales M, entregan E, proyectos P
WHERE M.Clave = E. Clave
AND P.Numero = E.Numero
AND P.Numero = (SELECT Numero
FROM Proyectos
WHERE Denominacion = 'Mexico sin ti no estamos completos')

--Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".
SELECT M.clave, descripcion
FROM materiales M, entregan E, Proveedores P
WHERE M.Clave = E. Clave
AND P.RFC = E.RFC
AND P.rfc = (SELECT RFC
FROM Proveedores
WHERE RazonSocial = 'Acme tools')

--El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.
set dateformat dmy

SELECT E.rfc
FROM Proveedores P, Entregan E
WHERE P.RFC = E.RFC
AND Fecha BETWEEN '01/01/00' AND '31/12/00'
GROUP BY E.RFC
HAVING AVG(Cantidad) >= 300

--El Total entregado por cada material en el año 2000.
SELECT Clave, SUM(Cantidad) AS TOTAL
FROM Entregan E
WHERE Fecha BETWEEN '01/01/00' AND '31/12/00'
GROUP BY Clave

--La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución)
CREATE VIEW VENTAS2001 AS
SELECT Clave, SUM(Cantidad) AS TOTAL
FROM Entregan E
WHERE Fecha BETWEEN '01/01/01' AND '31/12/01'
GROUP BY Clave


SELECT TOP 1 clave
FROM VENTAS2001
ORDER BY TOTAL DESC

--Productos que contienen el patrón 'ub' en su nombre.
SELECT *
FROM Materiales
WHERE Descripcion LIKE '%ub%'

--Denominación y suma del total a pagar para todos los proyectos.
CREATE VIEW total_a_pagar AS 
SELECT Numero,(E.cantidad * M.costo + (E.cantidad * M.costo * (M.PorcentajeImpuesto/100))) as total
from Materiales M, Entregan E
WHERE M.Clave = E.Clave

SELECT denominacion, sum(total)
FROM Proyectos P, total_a_pagar T
WHERE P.Numero = t.numero
GROUP BY Denominacion

/*Denominación, RFC y RazonSocial de los proveedores que se suministran materiales 
al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).*/
CREATE VIEW tel_prov AS
SELECT RFC
FROM Entregan 
WHERE Numero = 5008

CREATE VIEW ec_prov AS
SELECT RFC
FROM Entregan 
WHERE Numero = 5004

CREATE VIEW PROV AS
SELECT * FROM tel_prov
INTERSECT
SELECT * FROM ec_prov

SELECT DISTINCT DENOMINACION, E.RFC, RAZONSOCIAL
FROM Proyectos PY, Proveedores PV, Entregan E
WHERE PV.RFC = E.RFC
AND PY.Numero = E.Numero
AND E.RFC IN (SELECT * FROM tel_prov)
AND E.RFC NOT IN (SELECT * FROM PROV)
AND E.Numero = 5008

/*Denominación, RFC y RazonSocial de los proveedores que se suministran materiales 
al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando 
en Coahuila (Sin usar vistas, utiliza not in, in o exists).*/
SELECT DISTINCT DENOMINACION, E.RFC, RAZONSOCIAL
FROM Proyectos PY, Proveedores PV, Entregan E
WHERE PV.RFC = E.RFC
AND PY.Numero = E.Numero
AND E.RFC IN (SELECT RFC
FROM Entregan 
WHERE Numero = 5008)
AND E.RFC NOT IN (SELECT RFC
FROM Entregan 
WHERE Numero = 5008
INTERSECT
SELECT RFC
FROM Entregan 
WHERE Numero = 5004)
AND E.Numero = 5008 

/*Costo de los materiales y los Materiales que son entregados al proyecto Televisa 
en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila.*/
SELECT COSTO, DESCRIPCION
FROM Materiales M, ENTREGAN E
WHERE M.Clave = E.Clave
AND E.RFC IN (SELECT * FROM tel_prov)
AND E.RFC IN (SELECT * FROM ec_prov)
AND E.Numero = 5008

--Nombre del material, cantidad de veces entregados y total del costo de dichas entregas por material de todos los proyectos.
CREATE VIEW CE AS
SELECT CLAVE, Numero, COUNT(CLAVE) AS cve
FROM Entregan
GROUP BY Clave, Numero

SELECT DESCRIPCION, cve, (cve*costo) AS costoTotal
from Materiales M, CE
WHERE M.Clave = CE.Clave