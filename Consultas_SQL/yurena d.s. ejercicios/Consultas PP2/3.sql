select d.nombre
from profesor p 
right join departamento d on p.id_departamento = d.id
where p.id_departamento is null