SELECT c.nombre_cliente, c.limite_credito, p.total
	from cliente c, pago p
		where p.total =
			(select max(p2.total)
				from pago p2
                where c.limite_credito > p2.total);