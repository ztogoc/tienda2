select distinct p.nombre
	from producto p
    where p.codigo_producto not in 
    (select dp.codigo_producto
    from detalle_pedido dp);