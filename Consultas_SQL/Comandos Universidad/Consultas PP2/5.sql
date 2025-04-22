select * from asignatura a
left join profesor	pr on pr.id_profesor = a.id_profesor
where a.id_profesor is null;