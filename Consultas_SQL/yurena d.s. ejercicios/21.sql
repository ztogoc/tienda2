select fabricante.nombre, count(*)
from producto inner join fabricante
on producto.codigo_fabricante= fabricante.codigo
where producto.precio>=180
group by producto.codigo_fabricante;