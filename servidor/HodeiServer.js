const BASE_URL = "https://ihodeicontact.up.railway.app"; // Reemplázalo con la URL real

//Obtener el preview de las publicaciones
// Esta función obtiene un preview de las publicaciones desde el servidor
// y devuelve un array de objetos con id, título e imagen.
export const obtenerPublicacionesPreview = async () => {
  try {
    const response = await fetch(`${BASE_URL}/preview`);
    if (!response.ok) throw new Error("Error al cargar publicaciones");

    const data = await response.json();

    // Mapeamos para construir la URL de Drive
    return data.map((item) => ({
      id: item.id,
      title: item.titulo,
      imgUrl: `https://drive.google.com/uc?id=${item.contenido_id}&export=download`,
    }));
  } catch (error) {
    console.error("Error en obtenerPublicacionesPreview:", error);
    return [];
  }
};

//Obtener primera parte de la publicación
export const obtenerDatosPost = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/publicacion/${id}`);
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
    const res = await fetch(`${BASE_URL}/contenido/${id}`);
    if (!res.ok) throw new Error("Error al obtener el contenido");

    const data = await res.json();

    const media = data
      .filter((item) => item.tipoContenido === "IMG" || item.tipoContenido === "VID")
      .map((item) => ({
        type: item.tipoContenido === "VID" ? "video" : "image",
        url: `https://drive.google.com/uc?id=${item.id}&export=download`,
      }));

    const pdfs = data
      .filter((item) => item.tipoContenido === "PDF")
      .map((item) => ({
        url: `https://drive.google.com/uc?id=${item.id}&export=download`,
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
