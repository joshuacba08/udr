### Challenge Técnico – Alquiler de Vehículos

### Descripción
`●  El objetivo de este desafío es construir una página para seleccionar vehículos de alquiler.` 
        `Utilizando el archivo carsJSON como si fuese la respuesta de una API.`
        `Guiándote visualmente por el diseño provisto en Figma.`

`Figma: https://www.figma.com/design/tc42nP0MDwQE4b9KW8wzPX/UDR---Challenge?node-id=327-3385&t=VNTXNzUsy4jqZE8u-1`
`Contraseña: GreenFlame2025`

### Objetivos
`●  Renderizar el listado de vehículos a partir del JSON proporcionado, simulando una respuesta de una API real.`
        `Cada vehículo debe mostrarse en una tarjeta con todos sus datos relevantes: imagen, compañía, categoría, características, precio y botón de acción.`

`●  Aplicar estilos y maquetación lo más fieles posible al diseño entregado en Figma.`
        `Se debe respetar la estructura, colores, tipografías, iconografía, espaciado y comportamiento visual definido en el diseño.`

`●  Incluir un selector de orden por precio con las opciones: "Mayor precio" y "Menor precio".`
        `El listado de vehículos debe actualizarse automáticamente al cambiar la opción seleccionada.`

`●  Incorporar filtros por características mediante checkboxes, permitiendo al usuario refinar la búsqueda por atributos como cantidad de puertas, categoría del auto, capacidad de maletas, etc.`
        `Al seleccionar o deseleccionar filtros, el listado de vehículos debe actualizarse en tiempo real mostrando solo los que cumplen con los criterios. (Minimo 3 filtros)`

`●  Mostrar el detalle de las inclusiones tarifarias al hacer clic en el ícono de signo de interrogación ubicado junto al nombre de la tarifa (por ejemplo, “Inclusive Light”) en cada tarjeta.`
        `Al activarse, se debe desplegar un panel o tooltip que muestre una lista con los beneficios incluidos, tal como se visualiza en el diseño de Figma.`

`●  Permitir seleccionar vehículos para cotización, con un máximo de 5 autos.`
        `Al seleccionar un auto, debe mostrarse un indicador visual con un número que represente el orden en que fue seleccionado (1°, 2°, 3°, etc.).`
        `Si ya hay 5 autos seleccionados, no debe permitirse seleccionar más. También se debe conservar el orden en que fueron añadidos a la cotización.`

`●  Agregar la funcionalidad de filtrar autos según un rango de precios, utilizando el componente de doble slider mostrado en el diseño de Figma.`
        `El usuario podrá ajustar el valor mínimo (izquierda) y el valor máximo (derecha) para definir el rango deseado. Solo se mostrarán autos cuyo precio esté dentro del rango seleccionado.`
        `Ejemplo: si el usuario ajusta el rango entre 2.000.000 y 7.000.000 COP, el listado debe actualizarse automáticamente para mostrar solo vehículos en ese rango.`


### Tecnologías y Requisitos Técnicos
`●  Desarrollar obligatoriamente utilizando React + TypeScript.`

`●  Manejo del estado con Zustand.`

`●  Uso de hooks como: useState, useEffect, useMemo, useRef, useCallback.`

`●  Estilos: pueden implementarse manualmente o utilizando frameworks como TailwindCSS.`

`●  Se permite el uso de librerías adicionales que consideres necesarias para lograr fidelidad visual y funcionalidad.`

### Entrega
`●  Subí tu proyecto a tu cuenta de GitHub o GitLab.`

`●  Compartí el enlace del repositorio.`

`●  Incluí un archivo README.md con:`

`       -Instrucciones para instalar dependencias.`

`       -Pasos para correr el proyecto localmente.`
