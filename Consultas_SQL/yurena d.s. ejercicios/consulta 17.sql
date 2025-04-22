select C.NOMBRE_CLIENTE, E.nombre, e.apellido1, 
e.apellido2 from cliente c
inner join empleado e on e.codigo_empleado = 
c.codigo_empleado_rep_ventas;
    
    
    
    



    