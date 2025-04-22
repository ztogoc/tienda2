select  * from alumno a
where a.fecha_nacimiento = 
(select max(a.fecha_nacimiento)
from alumno a);