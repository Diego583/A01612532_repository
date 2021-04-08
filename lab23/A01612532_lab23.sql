-- Crear procedimientos para manipular datos
-- MATERIALES
IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaMaterial' AND type = 'P')
                DROP PROCEDURE creaMaterial
            GO

            CREATE PROCEDURE creaMaterial
                @uclave NUMERIC(5,0),
                @udescripcion VARCHAR(50),
                @ucosto NUMERIC(8,2),
                @uimpuesto NUMERIC(6,2)
            AS
                INSERT INTO Materiales VALUES(@uclave, @udescripcion, @ucosto, @uimpuesto)
            GO

EXECUTE creaMaterial 5000,'Martillos Acme',250,15
SELECT * FROM Materiales

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaMaterial' AND type = 'P')
                DROP PROCEDURE modificaMaterial
            GO

            CREATE PROCEDURE modificaMaterial
                @uclave NUMERIC(5,0),
                @udescripcion VARCHAR(50),
                @ucosto NUMERIC(8,2),
                @uimpuesto NUMERIC(6,2)
            AS
                UPDATE Materiales 
				SET Descripcion = @udescripcion, Costo = @ucosto, PorcentajeImpuesto = @uimpuesto
				WHERE Clave = @uclave;
            GO

EXECUTE modificaMaterial 5000,'Tornillos Acme',50,2
SELECT * FROM Materiales

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaMaterial' AND type = 'P')
                DROP PROCEDURE eliminaMaterial
            GO

            CREATE PROCEDURE eliminaMaterial
                @uclave NUMERIC(5,0)
            AS
                DELETE FROM Materiales 
				WHERE Clave = @uclave;
            GO

EXECUTE eliminaMaterial 5000
SELECT * FROM Materiales WHERE Clave = 5000

-- PROYECTOS
IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaProyecto' AND type = 'P')
                DROP PROCEDURE creaProyecto
            GO

            CREATE PROCEDURE creaProyecto
                @unumero NUMERIC(5,0),
                @udenominacion VARCHAR(50)
            AS
                INSERT INTO Proyectos VALUES(@unumero, @udenominacion)
            GO

EXECUTE creaProyecto 5020,'Caritas'
SELECT * FROM Proyectos

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaProyecto' AND type = 'P')
                DROP PROCEDURE modificaProyecto
            GO

            CREATE PROCEDURE modificaProyecto
                @unumero NUMERIC(5,0),
                @udenominacion VARCHAR(50)
            AS
                UPDATE Proyectos 
				SET Denominacion = @udenominacion
				WHERE Numero = @unumero;
            GO

EXECUTE modificaProyecto 5020,'Caritas SLP'
SELECT * FROM Proyectos

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaProyecto' AND type = 'P')
                DROP PROCEDURE eliminaProyecto
            GO

            CREATE PROCEDURE eliminaProyecto
                @unumero NUMERIC(5,0)
            AS
                DELETE FROM Proyectos 
				WHERE Numero = @unumero;
            GO

EXECUTE eliminaProyecto 5020
SELECT * FROM Proyectos WHERE Numero = 5020

-- PROVEEDORES 
IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaProveedor' AND type = 'P')
                DROP PROCEDURE creaProveedor
            GO

            CREATE PROCEDURE creaProveedor
                @urfc VARCHAR(15),
                @urazonsocial VARCHAR(50)
            AS
                INSERT INTO Proveedores VALUES(@urfc, @urazonsocial)
            GO

EXECUTE creaProveedor 'IIII800101','Invercasa'
SELECT * FROM Proveedores

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaProveedor' AND type = 'P')
                DROP PROCEDURE modificaProveedor
            GO

            CREATE PROCEDURE modificaProveedor
                @urfc VARCHAR(15),
                @urazonsocial VARCHAR(50)
            AS
                UPDATE Proveedores 
				SET RazonSocial = @urazonsocial
				WHERE RFC = @urfc;
            GO

EXECUTE modificaProveedor 'IIII800101','Materiales del altiplano'
SELECT * FROM Proveedores

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaProveedor' AND type = 'P')
                DROP PROCEDURE eliminaProveedor
            GO

            CREATE PROCEDURE eliminaProveedor
                @urfc VARCHAR(15)
            AS
                DELETE FROM Proveedores 
				WHERE RFC = @urfc;
            GO

EXECUTE eliminaProveedor 'IIII800101'
SELECT * FROM Proveedores WHERE RFC = 'IIII800101'

-- ENTREGAN 
set dateformat dmy
IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'creaEntrega' AND type = 'P')
                DROP PROCEDURE creaEntrega
            GO

            CREATE PROCEDURE creaEntrega
				@uclave NUMERIC(5,0),
                @urfc VARCHAR(15),
				@unumero NUMERIC(5,0),
				@ufecha DATETIME,
				@ucantidad NUMERIC(8,2)
            AS
                INSERT INTO Entregan VALUES(@uclave, @urfc, @unumero, @ufecha, @ucantidad)
            GO
			
EXECUTE creaEntrega 1460, 'BBBB800101', 5002, '24/03/21', 150
SELECT * FROM Entregan

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'modificaEntrega' AND type = 'P')
                DROP PROCEDURE modificaEntrega
            GO

            CREATE PROCEDURE modificaEntrega
                @uclave NUMERIC(5,0),
                @urfc VARCHAR(15),
				@unumero NUMERIC(5,0),
				@ufecha DATETIME,
				@ucantidad NUMERIC(8,2)
            AS
                UPDATE Entregan 
				SET Cantidad = @ucantidad
				WHERE Clave = @uclave AND RFC = @urfc AND Numero = @unumero AND Fecha = @ufecha;
            GO

EXECUTE modificaEntrega 1460, 'BBBB800101', 5002, '24/03/21', 210
SELECT * FROM Entregan

IF EXISTS (SELECT name FROM sysobjects
                       WHERE name = 'eliminaEntrega' AND type = 'P')
                DROP PROCEDURE eliminaEntrega
            GO

            CREATE PROCEDURE eliminaEntrega
                 @uclave NUMERIC(5,0),
                @urfc VARCHAR(15),
				@unumero NUMERIC(5,0),
				@ufecha DATETIME
            AS
                DELETE FROM Entregan 
				WHERE Clave = @uclave AND RFC = @urfc AND Numero = @unumero AND Fecha = @ufecha;
            GO

EXECUTE eliminaEntrega 1460, 'BBBB800101', 5002, '24/03/21'
SELECT * FROM Entregan WHERE Clave = 1460 AND RFC = 'BBBB800101' AND Numero = 5002 AND Fecha = '24/03/21';


-- Crear procedimientos para realizar consultas con parámetros
IF EXISTS (SELECT name FROM sysobjects
                                       WHERE name = 'queryMaterial' AND type = 'P')
                                DROP PROCEDURE queryMaterial
                            GO

                            CREATE PROCEDURE queryMaterial
                                @udescripcion VARCHAR(50),
                                @ucosto NUMERIC(8,2)

                            AS
                                SELECT * FROM Materiales WHERE descripcion
                                LIKE '%'+@udescripcion+'%' AND costo > @ucosto
                            GO

EXECUTE queryMaterial 'Lad',20

