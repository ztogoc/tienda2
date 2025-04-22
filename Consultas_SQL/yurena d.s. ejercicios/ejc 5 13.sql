select c.nombre_cliente 
	from cliente c
    where c.codigo_cliente in
    (select p.codigo_cliente
		from pago p);