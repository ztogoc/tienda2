  select p.estado, count(p.estado)
  from pedido p
  group by p.estado
  order by p.estado desc;