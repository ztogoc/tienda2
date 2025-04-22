select distinct dep.nombre
from departamento dep
inner join profesor pr on pr.id_departamento
= dep.id
inner join alumno al on al.id= pr.id_profesor
inner join asignatura ag on ag.id_profesor = al.id
inner join grado gr on gr.id = ag.id_grado
where gr.nombre =
'Grado en Ingenieria Informatica (plan 2015)';