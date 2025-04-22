select g.nombre, a.tipo, sum(a.creditos) as 
'Cantidad de Creditos'
from grado g
inner join asignatura a on g.id =a.id_grado
group by a.tipo, g.nombre 
order by 3 desc;