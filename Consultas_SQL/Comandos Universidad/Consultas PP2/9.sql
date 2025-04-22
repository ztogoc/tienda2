select d.nombre, count(*) as 'Cantidad de profesores'
from departamento d
inner join profesor p on p.id_departamento = d.id
group by d.nombre
order by 2 desc