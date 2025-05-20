
# iHodeiHub

Aplicación móvil desarrollada en **React Native** para **HodeiCloud**, diseñada para centralizar y optimizar la comunicación y gestión de información dentro del ecosistema de la empresa.  
Esta aplicación permite a los usuarios interactuar con diferentes servicios y funcionalidades proporcionadas por HodeiCloud, facilitando una experiencia integrada y eficiente.

Desarrollada por **MeylinM** durante su periodo de prácticas en la empresa **HodeiCloud**, cumpliendo con los requerimientos del cliente.

**GitHub:** [https://github.com/MeylinM/](https://github.com/MeylinM/)

---

## ⚙️ Configuración necesaria

> Este proyecto requiere un archivo de configuración ubicado en la carpeta `config/`, el cual **no** está incluido en el repositorio por motivos de seguridad.  
> Debes crearlo manualmente si no está presente.

### 📄 1. Crear archivo `config.js`

Dentro de la carpeta `config/`, crea un archivo llamado:

```
config.js
```

Y añade la siguiente estructura:

```js
export const PREVIEW_URL = ''; //Base para obtenerPublicacionesPreview
export const DATOS_URL = ''; //Base para obtenerDatosPost
export const CONTENIDO_URL = ''; //Base para obtenerContenidoPost

/**
 * Función para construir una URL válida de descarga desde Google Drive usando el ID del archivo.
 * @param {string} fileId - El identificador del archivo en Drive.
 * @returns {string} URL completa para la descarga.
 */
export const DRIVE_FILE_BASE = (fileId) =>
    `https://drive.google.com/uc?id=${fileId}&export=download`;
```

> Sustituye cada valor por tus credenciales reales.

---

## 🚀 Instalación y ejecución

1. Clona este repositorio:

```bash
git clone https://github.com/MeylinM/iHodeiHub.git
cd iHodeiHub
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta la aplicación:

```bash
npm start
```

> Asegúrate de tener configurado el entorno de desarrollo para React Native (Android Studio, Xcode, emuladores o dispositivos físicos).

---

## 📂 Estructura del proyecto

```
iHodeiHub/
├── assets/               # Recursos estáticos como imágenes y fuentes
├── components/           # Componentes reutilizables de la interfaz
├── config/               # Archivo de configuración API
├── screens/              # Pantallas principales de la aplicación
├── servidor/             # Lógica relacionada con la comunicación con el servidor
├── style/                # Estilos globales y específicos
├── App.js                # Punto de entrada de la aplicación
├── app.json              # Configuración de la app para Expo
├── eas.json              # Configuración para EAS (Expo Application Services)
├── index.js              # Archivo principal de arranque
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
```

---

## 🔗 Repositorios relacionados

- **Extensión de Chrome para crear publicaciones:**  
  👉 [https://github.com/JulenHidalgo/ihodei-contact-chrome-extension](https://github.com/JulenHidalgo/ihodei-contact-chrome-extension)

- **Servidor backend (ihodei-contact-server):**  
  👉 [https://github.com/JulenHidalgo/ihodei-contact-server](https://github.com/JulenHidalgo/ihodei-contact-server)

---

## 🛡️ Seguridad

- El archivo `config.js` no debe contener credenciales sensibles en producción.
- Asegúrate de excluirlo del control de versiones si se incluyen datos privados.
