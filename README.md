# Un poco de React.JS y Firebase

El proyecto lo podemos catalogar con la construccion de dos partes, firebase y React, uno funcionará como base de datos para almacenar nuestro sitio, en este caso un ecommerce, la otra parte será toda la parte visual y es la que estará en contacto con el cliente. 

Hablemos de React, el proytecto está dividido por carpetas, components, hooks, adapters y services. Los components son partes de código independientes y reutilizables, estos pueden manejar su propio estado y podemos combinar componentes para que haya una interfaz de usuario más completa, compleja y para mayor experiencia a nuestros futuros usuarios. Estos estados que poseen los componentes son representacion de un conjuntos de propiedades y valores en un momento determinado de ejecución, pudiendo manejar y actualizar su estado internamente, aunque estas van a morir y serán reiniciadas en cada render quedando a manos del garbage collector. Para esto están los Hooks, los cuales son funciones que nos permiten "conectarnos" a ciertas características del estado y del ciclo de vida los componentes.

Para empezar a usar React.JS ejecutaremos un comando en la terminal, posicionandonos en la carpeta en la cual deseemos trabajar y ejecutar: npx create-react-app nombreDeLaApp, esto nos creará una serie de archivos y carpetas las cuales funcionarán como la base de nuestro poyecto e iremos conectado e integrando nuestros archivos y componentes en App.js, la cual es la raíz que nos proporciona React por defecto.

Pasemos ahora a Firebase, este paso es más fácil, acá solo nos registramos a la página, creamos nuestra base de datos, instalamos mediante nuestra terminal: npm install firebase, y ya luego comienza a usar los SDK de los productos que quieres usar. Para mayor seguridad del proyecto, las credenciales de los datos de Firestore estarán ocultos y no serán subidos a github, cada proyecto debe contar con el suyo y mantener su respectiva seguridad.

**Tener en cuenta que para poder levantar el servidor se necesitará ejecutar: npm start situandonos al nivel de la carpeta que contenga los package.json.**


Ahora, tendremos que conectarnos con el DOM, esto gracias a ReactDOM, un paquete que proporciona métodos específicos de DOM que se pueden usar en el nivel superior de una aplicación web para permitir una forma eficiente de administrar los elementos DOM de la página web. Mientras React nos provee de métodos para crear los elementos que se van a renderizar en nuestro HTML, ReactDOM nos provee los métodos que nos permitirán llegar a un punto donde se encontrará nuestro código con nuestro HTML. Nuevamente tendremos que ejecutar en nuestra consola: npm install react-router-dom y ya estaremos listos para trabajar.

## Uso de componentes

* Cart: Confirmación de pedido y mensaje de salida al cliente para confirmar éxito de la carga de la orden a firebase.
* CartItem: Parte visual del carrito, mostrará los items, cantidades y precios en forma detallada.
* CartWidget: Imagen y contador del carrito en el navBar.
* Item: Primera visualización del producto antes de entrar en más detalles.
* ItemCount: Contador para elegir cantidad de los productos.
* ItemDetail: Paso posterior al haber añadido el producto al carro de compras.
* ItemDetailContainer: Pantalla de carga del sitio.
* ItemList: Lista de poductos.
* Carpeta Adapters: Permite ordenar la categoria y productos traidos desde firebase.