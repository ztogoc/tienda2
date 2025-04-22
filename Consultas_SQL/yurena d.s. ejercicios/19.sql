select fabricante.nombre, max(producto.precio),
min(producto.precio), avg(producto.precio), count(*)
from producto inner join fabricante	
on producto.codigo_fabricante = fabricante.codigo
group by fabricante.codigo
having avg(producto.precio)>200;