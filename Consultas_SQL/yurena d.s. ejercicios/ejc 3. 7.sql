select distinct concat(e.nombre, '', e.apellido1, '' , e.apellido2)
	as 'empleado'from (empleado e
    left join cliente c on e.codigo_empleado =
    c.codigo_empleado_rep_ventas)
    left join oficina o on e.codigo_oficina = o.codigo_oficina
    where e.codigo_oficina is null or 
    c.codigo_empleado_rep_ventas is null;
    