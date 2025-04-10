import { CONTENIDO_URL, DRIVE_FILE_BASE,PREVIEW_URL,DATOS_URL } from "../config/config";

/**
 * Obtiene un preview de las publicaciones disponibles desde el servidor.
 * Cada publicación incluye id, título y URL de imagen desde Google Drive.
 *
 * @async
 * @returns {Promise<Array<Object>>} Array con datos de publicaciones.
 *
 * @example
 * obtenerPublicacionesPreview().then(data => console.log(data));
 */
export const obtenerPublicacionesPreview = async () => {
  try {
    const response = await fetch(`${PREVIEW_URL}`);
    if (!response.ok) throw new Error("Error al cargar publicaciones");

    const data = await response.json();

    // Mapeamos para construir la URL de Drive
    return data.map((item) => ({
      id: item.id,
      title: item.titulo,
      imgUrl: DRIVE_FILE_BASE(item.contenido_id),
    }));
  } catch (error) {
    console.error("Error en obtenerPublicacionesPreview:", error);
    return [];
  }
};

/**
 * Obtiene los datos básicos de una publicación específica desde el servidor.
 *
 * @async
 * @param {string} id - ID de la publicación.
 * @returns {Promise<Object|null>} Objeto con id, título y descripción de la publicación.
 *
 * @example
 * obtenerDatosPost("123").then(data => console.log(data));
 */
export const obtenerDatosPost = async (id) => {
  try {
    const res = await fetch(`${DATOS_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener los datos del post");

    const data = await res.json();

    return {
      id: data[0].id,
      
      title: data[0].titulo,
      description: data[0].texto,
    };
  } catch (error) {
    console.error("Error en obtenerDatosPost:", error.message);
    return null;
  }
};

/**
 * Obtiene el contenido multimedia (imágenes, vídeos y PDFs) asociado a una publicación.
 *
 * @async
 * @param {string} id - ID de la publicación.
 * @returns {Promise<Object>} Objeto con arrays de contenido multimedia y PDFs.
 *
 * @example
 * obtenerContenidoPost("123").then(contenido => console.log(contenido));
 */
export const obtenerContenidoPost = async (id) => {
  try {
    const res = await fetch(`${CONTENIDO_URL}/${id}`);
    if (!res.ok) throw new Error("Error al obtener el contenido");

    const data = await res.json();

    const media = data
      .filter((item) => item.tipoContenido === "IMG" || item.tipoContenido === "VID")
      .map((item) => ({
        type: item.tipoContenido === "VID" ? "video" : "image",
        url: DRIVE_FILE_BASE(item.id),
      }));
      console.log(media.url);
    const pdfs = data
      .filter((item) => item.tipoContenido === "PDF")
      .map((item) => ({
        url: DRIVE_FILE_BASE(item.id),
      }));

    return { media, pdfs };
  } catch (error) {
    console.error("Error en obtenerContenidoPost:", error.message);
    return { media: [], pdfs: [] };
  }
};

/**
 * Obtiene toda la información asociada a una publicación específica (datos básicos y contenido multimedia).
 *
 * @async
 * @param {string} id - ID de la publicación.
 * @returns {Promise<Object|null>} Publicación completa con título, descripción, multimedia y PDFs.
 *
 * @example
 * obtenerPublicacionCompleta("123").then(publicacion => console.log(publicacion));
 */
export const obtenerPublicacionCompleta = async (id) => {
  try {
    const datos = await obtenerDatosPost(id);
    const contenido = await obtenerContenidoPost(id);

    return {
      ...datos,
      media: contenido.media,
      pdfs: contenido.pdfs,
    };
  } catch (error) {
    console.error("Error en obtenerPublicacionCompleta:", error.message);
    return null;
  }
};
