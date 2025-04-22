select concat(e.nombre,' ', e.apellido1, ' ',e.apellido2)
as 'empleado', e.email, e.puesto, concat (j.nombre, ' ',
j.apellido1, ' ', j.apellido2) as 'jefe'
from empleado e left join cliente c on e.codigo_empleado =
c.codigo_empleado_rep_ventas	
inner join empleado j on e.codigo_jefe = j.codigo_empleado
where c.codigo_empleado_rep_ventas is null ; 00.