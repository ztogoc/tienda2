select concat (e.nombre, ' ', e.apellido1, ' ', e.apellido2)
as 'empleado' , concat (j.nombre, ' ', j. apellido1, ' ' , j.apellido2)
as 'Jefe' from empleado e
inner join empleado j on e.codigo_jefe = j.codigo_empleado