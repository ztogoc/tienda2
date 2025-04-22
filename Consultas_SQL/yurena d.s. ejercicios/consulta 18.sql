select distinct c.nombre, e.nombre, e.apellido1,
e.apellido2 from cliente c 
inner join pago p on c.cogigo_cliente
inner join empleado e on c.codigo_empleado_repventas = 
e.codigo_empleado;