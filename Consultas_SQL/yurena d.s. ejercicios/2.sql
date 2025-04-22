select c.pais, count(c.pais) 
from cliente c
group by c.pais
order by c.pais;