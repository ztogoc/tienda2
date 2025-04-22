SELECT p.nombre
	from producto p
		where p.cantidad_en_stock = 
			(select max(p.cantidad_en_stock)
				from producto p);