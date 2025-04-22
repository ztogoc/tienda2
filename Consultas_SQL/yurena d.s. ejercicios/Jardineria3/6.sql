select distinct concat(e.nombre, ' ',e.apellido1, ' ',e.apellido2, ' ')
as 'empleado', o.linea_direccion1, o.linea_direccion2, o.ciudad, o.region, o.pais 
from empleado e 
left join cliente c on e.codigo_empleado = 
c.codigo_empleado_rep_ventas
inner join oficina o on e.codigo_oficina = o.codigo_oficina
where c.codigo_empleado_rep_ventas is null