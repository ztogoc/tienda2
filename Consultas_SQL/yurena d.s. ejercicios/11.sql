select c.nombre_contacto, c.apellido_contacto, 
min(p.fecha_pago) as 'Primer pago',
max(p.fecha_pago) as 'Ultimo pago'
from pago p inner join cliente c on 
p.codigo_cliente = c.codigo_cliente
group by c.codigo_cliente;