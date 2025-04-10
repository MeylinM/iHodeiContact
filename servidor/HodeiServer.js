import { CONTENIDO_URL, DRIVE_FILE_BASE,PREVIEW_URL,DATOS_URL } from "../config/config";

//Obtener el preview de las publicaciones
// Esta función obtiene un preview de las publicaciones desde el servidor
// y devuelve un array de objetos con id, título e imagen.
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

//Obtener primera parte de la publicación
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

//Obtener el contenido multimedia de la publicación
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

//Obtener la publicación completa
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
