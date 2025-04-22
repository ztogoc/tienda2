select sum(dp.precio_unidad * dp.cantidad) as 'base imponible',
sum((dp.precio_unidad * dp.cantidad) *0.21) as 'IVA',
sum(dp.precio_unidad * dp.cantidad + ((dp.precio_unidad
*dp.cantidad)*0.21)) as 'Total'
from producto pr inner join detalle_pedido dp on 
pr.codigo_producto = dp.codigo_producto
inner join pedido pe on dp.codigo_pedido =pe.codigo_pedido
inner join cliente c on c.codigo_cliente = pe.codigo_cliente
inner join pago pa on pa.codigo_cliente = c.codigo_cliente;
