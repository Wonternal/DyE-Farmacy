# Proyecto integración Darío Chinea y Eduardo Camacho

## <a name="descripcion"> </a> Descripción

DyE Farmacy es una aplicación web que permite a los usuarios comprar productos farmacéuticos y medicamentos de forma conveniente a través de Internet. La aplicación está construida con una arquitectura cliente-servidor, utilizando React en el lado del cliente y Spring Boot en el lado del servidor.

## <a name="requisitos"> </a> Requisitos del sistema

Asegúrate de tener instalados los siguientes componentes en tu sistema antes de ejecutar la aplicación:

- [Node.js (versión >= 12.0.0)](https://nodejs.org/es/download)
- [Spring Boot (versión >= 2.7.10)](https://spring.io/)
- [npm (versión >= 6.0.0)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Java Development Kit (JDK) 11 o superior](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [MySQL](https://www.mysql.com/)

## <a name="configuracion"> </a> Configuración del proyecto

Sigue los pasos a continuación para configurar el proyecto en tu entorno local:

1. Clona el repositorio de GitHub en tu máquina local:

   ```
   git clone https://github.com/Wonternal/DyE-Farmacy.git
   ```

2. Accede al directorio del proyecto:

   ```
   cd DyE-Farmacy
   ```

3. Configura el servidor Spring Boot:
   
   Accede al directorio del servidor:

     ```
     cd server/DyE-Farmacy-Backend
     ```
   
   Abre el archivo `application.properties` y configura los valores de la base de datos, como el URL, nombre de usuario y contraseña. Asegúrate de tener una base de datos MySQL configurada y accesible.

4. Configura el cliente React:
   
   Accede al directorio del cliente:

     ```
     cd client/dye-farmacy/src
     ```

5. Instala las dependencias:
   Dentro del directorio `client`, ejecuta el siguiente comando:

     ```
     npm install
     ```

## <a name="ejecucion"> </a> Ejecución

Sigue los pasos a continuación para ejecutar la aplicación:

1. Inicia el servidor Spring Boot:
   
   - Desde el directorio `server/DyE-Farmacy-Backend`, haces click derecho encima del proyecto -> Run As -> Spring Boot App
   
   El servidor se ejecutará en `http://localhost:8080`.

2. Inicia el cliente React:
   
   - Desde el directorio `client/dye-farmacy/src`, ejecuta el siguiente comando:

     ```
     npm start
     ```

   El cliente se ejecutará en `http://localhost:3000`.

3. Abre un navegador web y visita `http://localhost:3000` para acceder a la aplicación de la Farmacia Online.
