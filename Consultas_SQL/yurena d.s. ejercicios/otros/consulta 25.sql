select  fabricante.nombre, count(producto.codigo)
	from fabricante inner join producto 
    on fabricante.codigo=producto.codigo_fabricante
    group by fabricante.nombre
    having count(producto.codigo) >=2;
    
    