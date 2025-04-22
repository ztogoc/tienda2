select fabricante.nombre, count(producto.codigo)
from fabricante left join producto
on fabricante.codigo = producto.codigo_fabricante 
group by fabricante.codigo
order by 2 desc;