select c.nombre_cliente, concat(e.nombre, ' ' , e.apellido1,  '  ', e.apellido2)
as 'Representante' , o.ciudad
from cliente c inner join empleado e on e.codigo_empleado = c.codigo_empleado_rep_ventas
inner join oficina o on o.codigo_oficina = e.codigo_oficina;