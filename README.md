# 🚀 Trabajo Práctico 01: Ficha Técnica de Videojuegos con Node.js

## 📝 Descripción del Proyecto
Este proyecto es una aplicación de consola construida con **Node.js**. Su objetivo principal es procesar información estructurada sobre un videojuego, recolectar datos del entorno del sistema operativo (del equipo donde se ejecuta) y del estudiante, y volcar todo ese contenido de forma automática en una ficha técnica formateada.

Es un ejercicio ideal para entender cómo interactúa JavaScript con el sistema de archivos y cómo funciona la asincronía fuera del navegador.

---

## 🛠️ Requisitos Previos
Antes de ejecutar este proyecto, necesitas tener instalado en tu computadora:
* **Node.js** (Se recomienda la versión LTS más reciente). Puedes descargarlo desde [nodejs.org](https://nodejs.org).
* Una terminal de comandos (PowerShell, Git Bash, Terminal de Mac/Linux o la integrada de VS Code).

---

## 💻 Cómo Ejecutar el Proyecto

Para correr la aplicación, abre tu terminal, asegúrate de estar parado dentro de la carpeta raíz de este proyecto y utiliza los siguientes comandos según lo que desees probar:

### 1. Script Principal (Generador de Fichas)
Este comando corre el programa básico:
```bash
node index.js
```

### 2. Pasar un Nombre Personalizado por Parámetro
Si tu código permite enviarle el nombre de un videojuego desde la consola para armar la ficha, ejecútalo así (incluyendo las comillas):
```bash
node index.js "Nombre del Videojuego"
```

### 3. Demostración del Event Loop
Para ver en acción cómo Node.js maneja los tiempos y el orden de ejecución asíncrono, ejecuta este script secundario:
```bash
node orden-event-loop.js
```

---

## 📂 Archivos Generados y Estructura

Al ejecutar el script principal (`index.js`), el programa creará de forma automática una carpeta para organizar el resultado. No necesitas crearla tú mismo.

* **Ruta de salida:** `salida/ficha-videojuego.txt`

### 🗺️ Vista del árbol de archivos:
```text
├── index.js                  # Script principal del proyecto
├── orden-event-loop.js       # Script de pruebas teóricas
├── .gitignore                # Archivo para ignorar dependencias y credenciales
├── README.md                 # Guía y documentación del proyecto (este archivo)
└── salida/
    └── ficha-videojuego.txt  # Ficha técnica generada por el código
```

---

## 🧠 Conceptos Clave Aprendidos (Glosario Didáctico)

Si estás introduciéndote en este tema, estos cuatro conceptos son los pilares fundamentales de Node.js:

### 1. Diferencia entre JavaScript, V8 y el Runtime de Node.js
* **JavaScript:** Es el lenguaje de programación propiamente dicho (la sintaxis, variables y lógica que escribimos).
* **V8:** Es el motor ultra veloz creado por Google (escrito en C++) que toma nuestro código JavaScript y lo traduce a "lenguaje de máquina" para que la computadora lo entienda.
* **Runtime de Node.js:** Es el entorno que "le da superpoderes" a JavaScript. Originalmente JavaScript solo vivía dentro del navegador. Node.js lo saca de ahí y le permite interactuar directamente con tu computadora (leer discos, crear carpetas, manejar redes).

### 2. El misterio de `setTimeout(..., 0)`
En JavaScript hay un motor central llamado **Event Loop** (Bucle de Eventos). Cuando pones un `setTimeout` (aunque el tiempo de espera sea 0), Node.js detecta que es una tarea asíncrona y la manda a una "fila de espera". El programa principal tiene prioridad absoluta; por lo tanto, el código asíncrono solo se ejecutará cuando todo el código síncrono principal haya terminado por completo.

### 3. I/O Bloqueante vs. No Bloqueante (Entrada/Salida)
* **Bloqueante:** Imagina una fila de banco donde el cajero atiende a una persona y todos los demás esperan parados sin poder hacer nada. En código, una operación pesada detiene todo el programa hasta que termina.
* **No Bloqueante:** Es como un restaurante. El mozo toma tu pedido, lo lleva a la cocina y va a atender a otra mesa de inmediato. Cuando tu comida está lista, te la trae. Node.js trabaja así: delega las tareas pesadas de lectura/escritura y sigue ejecutando el resto del código sin perder tiempo.

### 4. ¿Para qué sirven `node:path` y `node:fs`?
Son módulos nativos (ya vienen incorporados en Node.js, no hace falta instalarlos):
* **`node:path`:** Sirve para armar rutas de carpetas de forma segura. Evita errores comunes porque Windows usa barras invertidas (`\`) y Linux/Mac usan barras diagonales (`/`) para separar carpetas.
* **`node:fs` (File System):** Es la herramienta que nos da acceso al disco duro. Gracias a ella podemos crear carpetas (`fs.mkdirSync`) y escribir archivos de texto (`fs.writeFileSync`).