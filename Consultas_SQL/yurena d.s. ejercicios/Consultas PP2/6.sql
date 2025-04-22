select d.nombre, ag.nombre from departamento d
left join profesor pr on pr.id_profesor =d.id
left join asignatura ag on ag.id_profesor= pr.id_profesor
left join alumno_se_matricula_asignatura ama on ama.id_asignatura = ag.id
left join curso_escolar ce on ce.id = ama.id_curso_escolar
where ce.id is null and ag.nombre is not null;