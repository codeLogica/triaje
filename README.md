Datos de importancia
-------------

1. No se puede cambiar entre paginas HTML.
   Arroja diferentes errores:
   - En Mozilla Firefox:
     -*Error de seguridad*
     -*Uncaught DOMException: The operation is insecure*
   - En Google Chrome:
     -*Uncaught DOMException: Failed to execute 'pushState' on 'History':*
    
   Previamente se habia realizado a traves de una etiqueta <a> pero la idea es que esto se realize sin necesidad de recargar la pagina

2. Hay fallas en la logica que deben ser solucionadas con investigacionn exhaustiva
  - Los valores no se guardan al cambiar de pagina HTML / valores de variables se reinician
  - En el apartado respiratorio se crea un combobox en cascada con opciones solo que estas no aparecen 
 
3. El codigo debe ser optimizado 
  - Se repiten muchas cosas que pueden reducirse o mejorarse con mayor conocmiento y/o uso de frameworks
