select distinct *  from alumno al 
inner join alumno_se_matricula_asignatura asm on
al.id= asm.id_alumno 
inner join asignatura a on asm.id_asignatura = a.id
inner join curso_escolar ce on ce.id =
asm.id_curso_escolar 
where ce.anyo_inicio ='2018' and ce.anyo_fin ='2019'

