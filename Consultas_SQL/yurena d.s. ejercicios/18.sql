select codigo_fabricante, max(precio),
min(precio), avg(precio), count(*)
from producto
group by codigo_fabricante
having avg(precio)>200;