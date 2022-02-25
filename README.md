# Explicación de uso del script

El script esta basado en nodejs, por lo tanto se necesitan las librerias correspondientes para utilizarlo

Para lanzar el script se necesita lanzar:
~~~
$ npm i
~~~
~~~
$ npm start
~~~
Al inicio del script va a pedir el site donde quiere realizar la busqueda, luego el id del usuario que se desean ver las publicaciones.
Por medio de un request se extrae el json desde la pagina de Mercado Libre, para asi conseguir los datos requeridos, los cuales se los presenta en un json.
