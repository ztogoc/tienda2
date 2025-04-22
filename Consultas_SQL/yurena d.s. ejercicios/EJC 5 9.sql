SELECT P.nombre
	from PRODUCTO p
		where P.PRECIO_VENTAS >=
        ALL(SELECT MAX(P.PRECIO_VENTA)
        FROM producto p);