 select d.nombre
 from departamento d
 where d.id not in (select distinct p.id_departamento from profesor p)