select alumno.apellido1, alumno.apellido2, alumno.nombre, departamento.nombre 
from alumno, profesor, departamento
where alumno.id=profesor.id_profesor and profesor.id_departamento= departamento.id
and departamento.id is null