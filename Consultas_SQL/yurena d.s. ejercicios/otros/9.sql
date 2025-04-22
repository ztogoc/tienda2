select  distinct al.nombre, a.nombre, ce.anyo_inicio, ce.anyo_fin
from asignatura a
inner join alumno_se_matricula_asignatura asm on a.id =
asm.id_asignatura 
inner join curso_escolar ce on asm.id_curso_escolar = ce.id
inner join alumno al on al.id = asm.id_alumno
where al.nif = '26902806M'