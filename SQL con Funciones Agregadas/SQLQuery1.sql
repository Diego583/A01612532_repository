SELECT nombre, SUM(sueldo) as 'Sueldo total' 
FROM Elenco 
GROUP BY nombre

SELECT nomestudio, SUM(presupuesto) as TotalPrecio
FROM peliculas, estudio
WHERE estudio.nomestudio = peliculas.nomestudio
GROUP BY nomestudio

SELECT nombre, AVG(sueldo) as promedio
FROM Elenco, Actor
WHERE Elenco.nombre = Actor.nombre AND sexo = 'hombre'
group by nombre
HAVING AVG(sueldo) > 5000000
ORDER BY AVG(sueldo) DESC

SELECT E.RFC, E.Fecha, cantidad
FROM Entregan as E, (SELECT RFC, MIN(cantidad) as presupuesto FROM Entregan GROUP BY RFC) as T
WHERE E.cantidad = presupuesto and E.RFC = T.RFC

SELECT nombre
FROM elenco
WHERE sueldo = (select max(sueldo) elenco where sexo = 'f')