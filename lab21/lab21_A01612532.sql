/*
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
set dateformat dmy
SELECT SUM(Cantidad) AS 'TOTAL UNIDADES', SUM(CANTIDAD * (COSTO + COSTO * (PORCENTAJEIMPUESTO / 100)))
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave
AND Fecha BETWEEN '01/01/97' AND '31/12/97'

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
SELECT  RAZONSOCIAL, COUNT(E.CANTIDAD) AS 'ENTREGAS', SUM(CANTIDAD * (COSTO + COSTO * (PORCENTAJEIMPUESTO / 100))) AS 'IMPORTE TOTAL'
FROM Entregan E, Materiales M, Proveedores P
WHERE E.Clave = M.Clave
AND E.RFC = P.RFC
GROUP BY RazonSocial

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, 
-- la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada 
-- sea mayor a 400.
SELECT M.CLAVE, DESCRIPCION, SUM(CANTIDAD) AS 'CANTIDAD TOTAL', MIN(CANTIDAD) AS 'MIN CANTIDAD', MAX(CANTIDAD) AS 'MAX CANTIDAD', SUM(CANTIDAD * (COSTO + COSTO * (PORCENTAJEIMPUESTO / 100))) AS 'IMPORTE TOTAL'
FROM Entregan E, Materiales M
WHERE E.Clave = M.Clave
GROUP BY M.Clave, Descripcion
HAVING AVG(CANTIDAD)> 400

-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, 
-- detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
SELECT RAZONSOCIAL, AVG(CANTIDAD) AS 'AVGmaterial', M.CLAVE, DESCRIPCION
FROM Entregan E, Materiales M, Proveedores P
WHERE E.Clave = M.Clave
AND E.RFC = P.RFC
GROUP BY RAZONSOCIAL, M.CLAVE, DESCRIPCION
HAVING AVG(CANTIDAD)> 500

-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: 
-- aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada 
-- sea mayor a 450.
SELECT RAZONSOCIAL, AVG(CANTIDAD) AS 'AVGmaterial', M.CLAVE, DESCRIPCION
FROM Entregan E, Materiales M, Proveedores P
WHERE E.Clave = M.Clave
AND E.RFC = P.RFC
GROUP BY RAZONSOCIAL, M.CLAVE, DESCRIPCION
HAVING AVG(CANTIDAD) < 370 OR AVG(CANTIDAD) > 450

-- Insertar 5 nuevos materiales
INSERT INTO Materiales VALUES (1440, 'Bloque de hormigón', 50, 1);
INSERT INTO Materiales VALUES (1450, 'Lana de roca', 150, 3);
INSERT INTO Materiales VALUES (1460, 'Fibra de vidrio', 250, 2.42);
INSERT INTO Materiales VALUES (1470, 'Azulejo', 175, 2.1);
INSERT INTO Materiales VALUES (1480, 'Acero', 350, 7);

-- Clave y descripción de los materiales que nunca han sido entregados.
SELECT CLAVE, DESCRIPCION
FROM Materiales 
WHERE Clave NOT IN (SELECT Clave FROM Entregan)

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
SELECT RAZONSOCIAL
FROM Proveedores
WHERE RFC IN (SELECT RFC FROM ENTREGAN WHERE Numero = 5000 OR Numero = 5019)

-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio 
-- de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
INSERT INTO Proveedores VALUES ('VAGO780901', 'CaTo SLP');
INSERT INTO Entregan VALUES (1020, 'VAGO780901', 5001, GETDATE(), 325);
INSERT INTO Entregan VALUES (1420, 'VAGO780901', 5001, GETDATE(), 178);
INSERT INTO Entregan VALUES (1390, 'VAGO780901', 5001, GETDATE(), 84);
INSERT INTO Entregan VALUES (1320, 'VAGO780901', 5001, GETDATE(), 75);
INSERT INTO Entregan VALUES (1110, 'VAGO780901', 5001, GETDATE(), 102);
INSERT INTO Entregan VALUES (1030, 'VAGO780901', 5001, GETDATE(), 200);
INSERT INTO Entregan VALUES (1250, 'VAGO780901', 5012, GETDATE(), 370);
INSERT INTO Entregan VALUES (1450, 'VAGO780901', 5012, GETDATE(), 390);
INSERT INTO Entregan VALUES (1410, 'VAGO780901', 5012, GETDATE(), 390);

SELECT RAZONSOCIAL, AVG(CANTIDAD) AS 'AVGmaterial'
FROM Entregan E, Proveedores P
WHERE E.RFC = P.RFC
GROUP BY RazonSocial
HAVING AVG(CANTIDAD) > (SELECT AVG(CANTIDAD) FROM Entregan WHERE RFC = 'VAGO780901')

-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades 
-- totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT P.RFC, RAZONSOCIAL
FROM Proveedores P
WHERE RFC IN (SELECT RFC FROM Entregan WHERE Numero = 5005)
AND (SELECT SUM(CANTIDAD) FROM Entregan WHERE Fecha BETWEEN '01/01/00' AND '31/12/00' AND RFC = P.RFC) > 
(SELECT SUM(CANTIDAD) FROM Entregan WHERE Fecha BETWEEN '01/01/01' AND '31/12/01' AND RFC = P.RFC)




