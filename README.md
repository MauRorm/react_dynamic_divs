# react_dynamic_divs
Ejemplo básico en Reactjs y ES6 para crear divs de forma dinámica con la función map.
Contiene la configuración básica de Webpack que es una herramienta la cual nos sirve para muchas cosas,
 siendo en este ejemplo útil para la transpilación de Javascript en su versión 6 a la versión 5 para que la mayoría de 
 navegadores puedan interpretar nuestro código. Otra función útil es poder transpilar el código de Reactjs en HTML entendible al navegador.
 
 Para su instalación:
 
 1.- Clonar el repositorio.
 2.- Instalar los paquetes con "npm install".
 4.- Ejecutar "./node_modules/.bin/webpack" para transpilar(repetir este paso cada que se haga un nuevo cambio en el código) ó
 	 ejecute "./node_modules/.bin/webpack -w" para no tener que repetir el proceso en caso de cambios, Webpack se ejecutará de nuevo
 	 automáticamente y será cuestión de refrescar el navegador para apreciar dichos cambios.
 3.- Abrir el index.html que viene en la carpeta "public" para ver el ejemplo.

Documentación breve sobre el archivo webpack.config.js.

resolve: Indicamos a Webpack que extensiones de archivos procesara, se toman a partir de la ruta <br />
         actual de webpack.config.js. <br />
entry: Ruta en la cuál se encuentra el componente que envuelve nuestra aplicación en Reactjs y donde se<br />
       inicia el procesamiento de Webpack. La parte de la ruta "__dirname" es una instrucción de Node, permite saber la ruta absoluta de un directorio. <br />
output: Se compone por el "path" que es la ruta donde se creara el archivo transpilado.<br />
        "filename" será el nombre de nuestro archivo transpilado, en este caso "build.js", dicho archivo <br />
        debe estar referenciado en el index.html principal, ya que es el script que contiene toda la aplicación <br />
        traducida.<br />
module: Ésta propiedad permite a Webpack añadir funcionalidades y recibir soporte de cualquier modulo externo, <br />
        como puede ser manejo de pre procesadores de estilos, soporte para ES6, minificaciones, etc. <br />
        Cabe mencionar que Webpack sin Loaders y de forma "nativa" soporta las carácteristicas de Javascript de la
        versión de Nodejs que se tenga instalada. <br />
exclude: En ésta sección se incluyen carpetas y/o archivos que no se incluiran en la transpilación. <br />
test: Aquí estamos indicando que a los archivos .js y .jsx se les cargará el módulo de babel, muy útil para poder procesar <br />
      nuestro código de React y ES6. <br />
loader: Carga los modulos que se van a utilizar dentro de Webpack, como Babel que incluye soporte para ES6, Reactjs y JSX. <br />
query: Contiene opciones de configuración en este caso para Babel. Indicamos que use los presets de Babel "es2015" <br />
       para poder hacer uso de las funciones javascript en ES6 y "react" para poder transformar nuestro código .jsx a <br />
       Javascript puro. Los presets antes mencionados forman parte del modulo Babel, no son propios de Webpack. <br />

Para poder ejecutar Webpack se puede aplicar en la consola "./node_modules/.bin/webpack" ó bien se puede agregar a los comandos <br /> ejecutables en el package.json para ser ejecutados como un comando NPM, ésto creará el archivo build.js el cual es el resultado final de <br /> la transpilación, este archivo no se suele modificar directamente, en caso de cualquier cambio, se trabaja con los componentes <br /> directos de Reactjs o bien con los archivos fuente. Cabe destacar que Webpack tiene multiples funcionalidades más, que explicaré <br /> en futuros ejemplos.
 
