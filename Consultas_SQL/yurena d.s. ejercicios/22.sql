select avg(precio), codigo_fabricante
from producto
group by codigo_fabricante;