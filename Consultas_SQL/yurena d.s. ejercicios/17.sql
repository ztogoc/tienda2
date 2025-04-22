select fabricante.nombre, max(producto.precio),
count(producto.codigo),
min(producto.precio), avg(producto.precio)
from fabricante inner join producto
on fabricante.codigo = producto.codigo_fabricante 
group by fabricante.codigo;