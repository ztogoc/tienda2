select distinct c.nombre_cliente, pr.gama
from cliente c
inner join pedido pe on c.codigo_cliente= pe.codigo_cliente
inner join detalle_pedido dp on dp.codigo_pedido = pe.codigo_pedido
inner join producto pr on pr.codigo_producto= dp.codigo_producto;