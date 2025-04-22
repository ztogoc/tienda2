select codigo_pedido, codigo_cliente, fecha_esperada, fecha_entrega
	from pedido
    where datediff(fecha_esperada, fecha_entrega) >=2;
    