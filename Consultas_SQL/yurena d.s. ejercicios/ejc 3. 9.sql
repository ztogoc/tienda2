select p.nombre, p.descripcion, gp.imagen from producto p 
left join detalle_pedido dp on p.codigo_producto = 
dp.codigo_producto
left join pedido pe on do.codigo_pedido = p.codigo_pedido
left join gama_producto gp on gp.gama = p.gama
where dp.codigo_producto is null;
 
