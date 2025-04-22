select count(c.codigo_cliente) as 'Ciudad M'
from cliente c
where c.ciudad like ('M%') 