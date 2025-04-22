select e.nombre, e.apellido1, e.apellido2, 
e.puesto, o.telefono
from empleado e inner join oficina o
on e.codigo_oficina = o.codigo_oficina
where e.codigo_empleado not in 
(select c.codigo_empleado_rep_ventas from cliente c);