select  distinct c.nombre_cliente, o.codigo_oficina, c.ciudad
from cliente c 
inner join empleado e on c.codigo_empleado_rep_ventas = e.codigo_empleado
inner join oficina o on o.codigo_oficina = e.codigo_oficina
where c.ciudad = 'Fuenlabrada'