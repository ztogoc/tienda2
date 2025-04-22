select c.nombre_cliente from pedido pe
right join cliente c on c.codigo_cliente = 
pe.codigo_cliente
left join pago pa on c.codigo_cliente = 
pa.codigo_cliente
where pe.codigo_cliente  is null and pa.codigo_cliente is null;