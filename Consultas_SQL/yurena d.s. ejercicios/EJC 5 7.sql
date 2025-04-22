SELECT concat(e.nombre, '', e.apellido1, '', e.apellido2, e.email) 
as 'empleados a cargo de alberto soria'
from empleado e
		where e.codigo_jefe = 
			(select e.codigo_empleado
				from empleado e
                where e.nombre = 'alberto' and e.apellido1 = 'soria');