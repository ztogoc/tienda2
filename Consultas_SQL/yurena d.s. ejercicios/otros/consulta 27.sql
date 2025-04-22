(select  fabricante.nombre, count(producto.codigo)
	from fabricante inner join producto 
    on fabricante.codigo=producto.codigo_fabricante
    where producto.precio>=220
    group by fabricante.codigo)
    union
    (select fabricante.nombre, 0 from fabricante
    where fabricante.codigo not in (select fabricante.codigo
    from fabricante inner join producto
    on fabricante.codigo=producto.codigo_fabricante
    where producto.precio>=220
    group by fabricante.codigo))
    order by 2 desc;
    
    
    