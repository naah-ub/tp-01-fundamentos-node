// Librerias
const fs = require("node:fs");
const path = require("node:path");

const videojuego = {
    titulo: "Helldivers 2",
    estudio: "Arrowhead Game Studios",
    anio: 2024,
    plataformas: ["PC", "PS5", "XBOX"],
    multijugador: true,
};

const plataformasTexto = videojuego.plataformas.join(", ");
const multijugador = videojuego.multijugador ? "Si" : "No";

const estudiante = process.argv[2] ?? "Bazan Andres";
const version = process.version;
const plataformaProcess = process.platform;

// Template literal
const ficha = `FICHA DE VIDEOJUEGO
=================
Estudiante: ${estudiante}
Node.js: ${version}
Plataforma del sistema: ${plataformaProcess}

Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugador}
`;

// Aun no existe la carpeta y el archivo
const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");

// Aqui recien creo la carpeta y el archivo
fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

// Informar el resultado
console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);