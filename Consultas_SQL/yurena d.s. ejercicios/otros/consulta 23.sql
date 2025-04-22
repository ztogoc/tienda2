select avg(precio), fabricante.nombre
	from producto inner join fabricante
    on producto.codigo_fabricante=fabricante.codigo
    group by fabricante.nombre;
    