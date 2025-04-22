select * 
from cliente c
Inner join pedido p on c.codigo_cliente = p.codigo_cliente 
where p.fecha_entrega > p.fecha_esperada;