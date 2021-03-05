
--EJERCICIO 1
DROP TABLE Materiales
DROP TABLE Proveedores
DROP TABLE Proyectos
DROP TABLE Entregan

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')

CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)


BULK INSERT A1612532.A1612532.[Materiales]
   FROM 'e:\wwwroot\rcortese\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT A1612532.A1612532.[Proveedores]
   FROM 'e:\wwwroot\rcortese\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT A1612532.A1612532.[Proyectos]
   FROM 'e:\wwwroot\rcortese\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )


SET DATEFORMAT dmy

BULK INSERT A1612532.A1612532.[Entregan]
   FROM 'e:\wwwroot\rcortese\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )


SELECT * from Materiales
SELECT * from Proveedores
SELECT * from Proyectos
SELECT * from Entregan

--EJERCICIO 2
  INSERT INTO Materiales values(1000, 'xxx', 1000)

  Delete from Materiales where Clave = 1000 and Costo = 1000

  ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)

  sp_helpconstraint materiales

  ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
  ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)

  ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave, RFC, Numero, Fecha)

--EJERCICIO 3

SELECT * from Materiales
SELECT * from Proveedores
SELECT * from Proyectos
SELECT * from Entregan

INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) ;

Delete from Entregan where Clave = 0

ALTER TABLE entregan add constraint cfentreganclave
  foreign key (clave) references materiales(clave);

ALTER TABLE entregan add constraint cfentreganRFC foreign key (RFC) references Proveedores(RFC);
ALTER TABLE entregan add constraint cfentregannumero foreign key (Numero) references Proyectos(Numero);

sp_helpconstraint Proveedores
sp_helpconstraint Proyectos


--EJERCICIO 3

INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);

SELECT * from Entregan WHERE Clave = 1000

Delete from Entregan where Cantidad = 0

ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;




