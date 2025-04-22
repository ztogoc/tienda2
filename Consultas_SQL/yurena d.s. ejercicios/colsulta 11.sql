select avg(producto.precio)
	from fabricante inner join producto
		on fabricante.codigo = producto.codigo_fabricante
        where fabricante.nombre = 'asus';
        
    

    