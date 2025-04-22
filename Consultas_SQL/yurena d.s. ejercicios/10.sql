select count(c.codigo_cliente) as 'clientes sin rep. ventas'
from cliente c inner join empleado e
on e.codigo_empleado = c.codigo_empleado_rep_ventas
where c.codigo_empleado_rep_ventas is null; 