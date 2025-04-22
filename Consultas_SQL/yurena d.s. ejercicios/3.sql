select avg(p.total) as 'Promedio de pago 2009'
from pago p
where year(p.fecha_pago)=2009;