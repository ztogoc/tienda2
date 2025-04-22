select e.nombre, e.apellido1, e.apellido2
	from empleado e
    where e.codigo_empleado not in
    (select c.codigo_empleado_rep_ventas
		from cliente c);