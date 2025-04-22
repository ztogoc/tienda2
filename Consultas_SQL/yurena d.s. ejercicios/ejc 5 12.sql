select c.nombre_cliente 
	from cliente c
    where c.codigo_cliente not in
    (select p.codigo_cliente
		from pago p);