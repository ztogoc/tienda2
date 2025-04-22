select p.nombre from producto p
left join detalle_pedido dp  on p.codigo_producto = 
dp.codigo_producto
left join pedido pe on dp.codigo_producto = pe.codigo_pedido
where dp.codigo_producto is null;