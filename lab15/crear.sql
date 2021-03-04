CREATE TABLE Materiales
(
  Clave numeric(5),
  Descripcion varchar(50),
  Costo numeric(8,2)
)

CREATE TABLE Proveedores
(
  RFC CHAR(13),
  RazonSocial VARCHAR(50),
)

CREATE TABLE Proyectos
(
  Numero numeric(5),
  Denominacion VARCHAR(50),
)

CREATE TABLE Entregan
(
  Clave numeric(5),
  RFC CHAR(13),
  Numero numeric(5),
  Fecha DATETIME,
  Cantidad NUMERIC (8,2)
)

BULK INSERT A1612532.A1612532.[Materiales]
   FROM 'e:\wwwroot\rcortese\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * from Materiales

BULK INSERT A1612532.A1612532.[Proveedores]
   FROM 'e:\wwwroot\rcortese\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * from Proveedores

BULK INSERT A1612532.A1612532.[Proyectos]
   FROM 'e:\wwwroot\rcortese\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * from Proyectos

SET DATEFORMAT dmy


BULK INSERT A1612532.A1612532.[Entregan]
   FROM 'e:\wwwroot\rcortese\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * from Entregan