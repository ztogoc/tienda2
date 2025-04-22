select concat(e.nombre, '', e.apellido1, '' , e.apellido2)
	as 'empleado' from empleado e
    left join oficina o on e.codigo_oficina =
    o.codigo_oficina
    where e.codigo_oficina is null;
    