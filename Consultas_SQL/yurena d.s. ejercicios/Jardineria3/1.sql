select c.nombre_cliente from cliente c
left join pago p on c.codigo_cliente = 
p.codigo_cliente
where p.codigo_cliente  is null;