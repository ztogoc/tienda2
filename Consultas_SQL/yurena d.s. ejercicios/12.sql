select pe.codigo_pedido, count(pr.codigo_producto)
as 'cantidad de productos distintos'
from producto pr inner join detalle_pedido dp on
pr.codigo_producto = dp.codigo_producto
inner join pedido pe on dp.codigo_pedido =
pe.codigo_pedido
group by pe.codigo_pedido;