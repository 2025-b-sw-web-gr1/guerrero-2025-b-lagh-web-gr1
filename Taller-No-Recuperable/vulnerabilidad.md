# Análisis de Vulnerabilidad: React2Shell

## Identificación del Párrafo Técnico
**Párrafo 5**

Este párrafo explica detalladamente el mecanismo técnico de la vulnerabilidad: el uso de serialización y deserialización para transmitir estados entre cliente y servidor. Menciona específicamente que la falta de validación en este proceso permite la inyección de estructuras manipuladas que el servidor ejecuta, identificando la causa raíz como "deserialización insegura".

## Explicación de la Causa Técnica
La vulnerabilidad ocurre debido a una **deserialización insegura** en los React Server Components.

En términos sencillos, cuando el servidor y el cliente se comunican, los datos (estados) se empaquetan (serializan) para enviarse y se desempaquetan (deserializan) al recibirse. El problema es que el servidor confía ciegamente en los datos que recibe y los desempaqueta sin verificar si son legítimos o seguros. Un atacante aprovecha esto modificando los datos empaquetados para incluir comandos maliciosos. Al desempaquetarlos, el servidor inevitablemente ejecuta esos comandos, permitiendo al atacante tomar control remoto del sistema sin necesidad de contraseñas.
