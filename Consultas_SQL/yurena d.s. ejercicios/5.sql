select max(p.precio_venta) as 'Producto mas caro' ,
min(p.precio_venta) as 'Producto mas barato'
from producto p;