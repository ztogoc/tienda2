select distinct c.codigo_cliente, c.nombre_cliente, c.nombre_contacto,
c.apellido_contacto, c.telefono
from  (cliente c inner join pedido pe using(codigo_cliente))
left join pago pa on c.codigo_cliente = pa.codigo_cliente
where pa.codigo_cliente is null;