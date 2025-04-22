select c.codigo_empleado_rep_ventas as 'ID Empleado',
 count(c.codigo_empleado_rep_ventas) 
 as 'Cantidad de clientes'
 from cliente c
 group by c.codigo_empleado_rep_ventas