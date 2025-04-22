select distinct al.nombre,al.apellido1, al.apellido2 
from alumno al inner join alumno_se_matricula_asignatura
asm on al.id =asm.id_alumno 
inner join asignatura asig on asig.id = asm.id_asignatura
inner join grado g on g.id =asig.id_grado	
where g.nombre like 'Grado en Ingenieria Informátìca (Plan 2015)' and al.sexo = 'M'