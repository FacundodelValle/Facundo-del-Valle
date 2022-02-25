

# ejercicio SQL + propuesta
~~~
punto 1:
~~~
~~~
Sin tener en cuenta el carrier capacity (ya que no alcanzaria para hacer el total de envios).
~~~
~~~
El primer carrier tendria un costo de $4.400.000 por hacer la totalidad de los envios.
~~~
~~~
El segundo carrier tendria un costo de $4.850.000 por hacer la totalidad de los envios. 
~~~
~~~
El tercer carrier tendria un costo de $800.000 por hacer los envios de AMBA unicamente.
~~~
~~~
~~~
~~~
Punto 2:
~~~
~~~
Se adjunto un pdf
~~~
~~~
Punto 3:
~~~
~~~
select Cantidad de envios * COSTOS
~~~
~~~
from carrier inner join COSTOS on Carrier.CarrierID = COSTOS.CarrierID inner join Cantidad de envios on cantidad de envios.Zona = COSTOS.Zona
~~~
