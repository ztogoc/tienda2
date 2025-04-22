select dp.codigo_producto,  p.nombre ,
count(dp.cantidad)
as 'unidades'
from producto p inner join detalle_pedido dp on
p.codigo_producto = dp.codigo_producto
group by dp.codigo_producto
order by unidades limit 20;