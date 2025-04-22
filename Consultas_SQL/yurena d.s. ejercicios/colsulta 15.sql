select max(producto.precio), min(producto.precio), 
	avg(producto.precio),count(producto.codigo)
	from fabricante inner join  producto 
    on fabricante.codigo = producto.codigo_fabricante
    where fabricante.nombre = 'crucial';
    
        
    

    