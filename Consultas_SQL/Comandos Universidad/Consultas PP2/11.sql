select g.nombre, count(a.id) as 
'Cantidad de asignaturas'
from grado g
inner join asignatura a on g.id =a.id_grado
group by g.nombre 
order by 2 desc;