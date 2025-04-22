select pe.codigo_pedido, sum(pr.precio_venta)
as 'suma total de pedidos'
from producto pr inner join detalle_pedido dp on
pr.codigo_producto = dp.codigo_producto
inner join pedido pe on dp.codigo_pedido =
pe.codigo_pedido
group by pe.codigo_pedido;