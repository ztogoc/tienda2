select codigo_pedido, codigo_cliente, fecha_esperada, fecha_entrega
	from pedido
    where fecha_entrega > fecha_esperada