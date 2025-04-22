select fabricante.nombre, sum(producto.precio)
	from fabricante inner join producto 
    on fabricante.codigo=producto.codigo_fabricante
    group by fabricante.codigo
    having sum(producto.precio)>1000;
    
    
    
    