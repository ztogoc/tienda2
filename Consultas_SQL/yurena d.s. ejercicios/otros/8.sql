select p.apellido1, p.apellido2, p.nombre, dep.nombre
from alumno p
inner join profesor pr on pr.id_profesor = p.id
inner join departamento dep on dep.id = pr.id_departamento
order by 1,2,3 asc;