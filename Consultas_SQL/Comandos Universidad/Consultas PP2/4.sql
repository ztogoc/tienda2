select * from alumno al
left join profesor pr on pr.id_profesor =al.id
left join asignatura a on a.id_profesor= pr.id_profesor
where al.tipo ='profesor'
and a.id is null
