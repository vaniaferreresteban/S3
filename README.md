# Spring 3 - ITAcademy

## Descripción

Este proyecto forma parte de un ejercicio de la IT Academy donde el objetivo principal no es desarrollar una funcionalidad visible en pantalla, sino **superar una serie de tests predefinidos**. 

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías y herramientas para el testing:

- **Node.js**: Entorno de ejecución de JavaScript.
- **Jest**: Framework de testing de JavaScript

## Instalación

Para configurar y ejecutar este proyecto localmente, sigue los siguientes pasos:

1.  **Clona tu repositorio:**

    ```bash
    git clone https://github.com/vaniaferreresban/S3.git
    cd S3
    ```

2.  **Instala las dependencias:**
    Utiliza npm para instalar todas las dependencias del proyecto, incluyendo las de desarrollo:
    ```bash
    npm install
    ```

## Scripts

El archivo `package.json` define varios scripts que facilitan la ejecución y el seguimiento de los tests:

- **`npm test`**: Ejecuta todos los tests una vez y muestra los resultados detallados en la consola. Además, genera los informes HTML y JUnit configurados.

  ```bash
  npm test
  ```

- **`npm test:watch`**: Ejecuta los tests en modo de observación. Jest se mantendrá en ejecución y volverá a ejecutar los tests automáticamente cada vez que detecte cambios en los archivos en las carpetas relevantes (como `src` o `tests`). Esto es útil para el desarrollo iterativo.
  ```bash
  npm run test:watch
  ```
