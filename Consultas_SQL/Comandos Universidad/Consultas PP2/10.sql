select d.nombre, count(p.id_departamento) as 'Cantidad de profesores'
from departamento d
left join profesor p on p.id_departamento = d.id
group by d.nombre
order by 2 desc