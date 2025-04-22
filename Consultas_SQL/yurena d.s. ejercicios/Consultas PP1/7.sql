select a.nombre
from asignatura a
inner join grado g on a.id_grado = g.id
where g.nombre = 'Grado en Ingenieria informatica (Plan 2015)';