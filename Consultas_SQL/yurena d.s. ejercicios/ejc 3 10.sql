select * from oficina o
where o.codigo_oficina not in (select distinct ofi.codigo_oficina
from oficina ofi 
inner join empleado emp using (codigo_oficina)
inner join cliente cli on cli.codigo_empleado_rep_ventas  = emp.codigo_empleado
inner join pedido pe using(codigo_cliente)
inner join detalle_pedido dp using(codigo_pedido)
inner join producto prod using (codigo_producto)
where prod.gama = 'frutales');