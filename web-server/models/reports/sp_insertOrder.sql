

DELIMITER $$

DROP PROCEDURE IF EXISTS debug_msg$$
DROP PROCEDURE IF EXISTS CreateOrder$$

CREATE PROCEDURE CreateOrder(storeID INT, clientID INT, empID INT, fechaEntrega DATE, productIDs VARCHAR(400), productQty VARCHAR(400), numItems INT)
BEGIN
	DECLARE prodID VARCHAR(4) DEFAULT '';
	DECLARE prodQty VARCHAR(4) DEFAULT '';
	DECLARE cont INT DEFAULT 1;
	DECLARE prodPrice INT DEFAULT 0;
	DECLARE prodInv INT DEFAULT 0;

	DECLARE EXIT HANDLER FOR SQLEXCEPTION 
	BEGIN	
		ROLLBACK; 
	END;

	START TRANSACTION;    
		-- insert order
		INSERT INTO ventas.ordenes (idCliente, estadoOrden, fechaOrden, required_date, idTienda, idEmpleado) 
												VALUES (clientID, 1, now(), fechaEntrega, storeID, empID);
		-- get order id
        SET @li = last_insert_id();
        
        -- start loop to insert each item in detallesOrden
		product_insert: LOOP
			-- extract the value from the string
			SET prodID = substring_index ( substring_index ( productIDs,',', cont), ',', -1);
			SET prodQty = substring_index ( substring_index ( productQty,',',cont), ',', -1);			  
            
            -- if we have gone through all the items
            IF cont > numItems THEN
				LEAVE product_insert;
			END IF;	
			
            -- get the amount of items in the inventory
			SELECT inv.cantidad INTO prodInv FROM produccion.inventario inv
							WHERE inv.idProducto = prodID AND inv.idTienda = storeID;
            
            -- check if there is enough inventory for the item
			IF prodInv < prodQty THEN 
				SELECT 'no hay inventario' AS Result;
				SIGNAL SQLSTATE '45000'   SET MESSAGE_TEXT = 'No hay suficiente inventario';
			END IF;
			
            -- update the inventory
			UPDATE produccion.inventario inv SET inv.cantidad = inv.cantidad - prodQty
							WHERE inv.idProducto = prodID AND inv.idTienda = storeID;
            
            -- get price
			SELECT  prod.precioVenta INTO prodPrice FROM produccion.productos prod
							WHERE prod.idProducto = prodID;
			
            -- insert detalle orden 
			INSERT INTO ventas.detalleOrden (idOrden, idItem, idProducto, cantidad, precioVenta) VALUES (@li, cont, prodID, prodQty, prodQty * prodPrice);
			 
            -- update counter 
			SET cont = cont + 1;
		 
		END LOOP;
	COMMIT;
    
    select 'success' as Result;
END$$

DELIMITER ;