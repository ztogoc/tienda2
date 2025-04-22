select 
concat (e.nombre, ' ', e.apellido1, ' ', e.apellido2)
as 'empleado' ,
 concat (j.nombre, ' ', j. apellido1, ' ' , j.apellido2)
as 'Jefe' , 
concat (m.nombre, ' ', m. apellido1, ' ' , m.apellido2)
as 'Jefe del jefe' 
from empleado e
inner join empleado j on e.codigo_jefe = j.codigo_empleado
inner join empleado m on j.codigo_jefe = m.codigo_empleado
;
