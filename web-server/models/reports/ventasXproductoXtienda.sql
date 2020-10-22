SELECT tnd.nomTienda as Tienda, prod.nomProducto as NombreProducto, sum(detord.precioVenta) as Ventas FROM ventas.tiendas tnd JOIN ventas.ordenes ord ON tnd.idTienda = ord.idTienda JOIN ventas.detalleOrden detord ON ord.idOrden = detord.idOrden JOIN produccion.productos prod ON prod.idProducto = detord.idProducto  WHERE ord.fechaOrden >= ? AND ord.fechaOrden < ? GROUP BY tnd.idTienda, prod.idProducto; , [fecha_inicial, fecha_final]