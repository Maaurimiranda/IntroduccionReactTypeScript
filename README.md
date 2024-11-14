# Introduccion React + TypeScript + Vite

Este proyecto es una introducción a React y TypeScript. Implementa una aplicación simple para manejar una lista de productos, utilizando conceptos clave como componentes, hooks (useState y useForm), y la biblioteca React-Bootstrap para los estilos.

## Estructura del Proyecto
La aplicación está organizada de la siguiente manera:

- App.tsx: el componente principal que renderiza AppProduct, que gestiona el flujo de agregar y mostrar productos.
- AppProduct.tsx: componente que incluye el formulario para agregar productos (FormProducts) y el listado de productos (ListProducts).
- FormProducts.tsx: componente que contiene un formulario para agregar nuevos productos, utilizando un hook personalizado (useForm) para gestionar los valores del formulario.
- ListProducts.tsx: componente que muestra los productos en un formato de tarjeta utilizando Card de React-Bootstrap.

## Funcionamiento de la Aplicación

### 1. Agregar un Producto
El componente FormProducts permite al usuario ingresar el nombre, imagen (URL), y precio de un producto. Al hacer clic en el botón Enviar producto, los datos del formulario se pasan al componente AppProduct mediante la función handleAddProduct, que actualiza el estado de la lista de productos.

### 2. Visualizar Productos
El componente ListProducts recibe la lista de productos desde AppProduct y los muestra en una cuadrícula de tarjetas. Cada tarjeta contiene el nombre, precio, e imagen del producto.

## Tecnologías Utilizadas

- **React** y **TypeScript** para la lógica de la aplicación y el tipado estático.
- **React-Bootstrap** para el diseño y estilo de componentes.
- **Hooks** de React (`useState`) y un hook personalizado (`useForm`).
