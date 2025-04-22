select concat(e.nombre, '', e.apellido1, '' , e.apellido2)
	as 'empleado' from empleado e
    left join cliente c on e.codigo_empleado =
    c.codigo_empleado_rep_ventas
    where c.codigo_empleado_rep_ventas is null;
    