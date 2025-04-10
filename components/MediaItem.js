import React, { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Video } from "expo-av";
import styles from "../style/HodeiPostStyle";

/**
 * Componente que muestra un elemento multimedia (imagen o vídeo) con un indicador de carga.
 * Decide automáticamente qué tipo de contenido multimedia mostrar según la propiedad recibida.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.item - Objeto que contiene información del elemento multimedia.
 * @param {string} props.item.type - Tipo de multimedia ("image" o "video").
 * @param {string} props.item.url - URL del archivo multimedia.
 * @returns {JSX.Element} Elemento multimedia con indicador de carga.
 *
 * @example
 * <MediaItem item={{ type: 'image', url: 'https://example.com/image.jpg' }} />
 */

const MediaItem = ({ item }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.slide}>
      {loading && (
        <ActivityIndicator size="large" color="#044F8B" style={styles.loader} />
      )}

      {item.type === "image" ? (
        <Image
          source={{ uri: item.url }}
          style={styles.media}
          onLoadEnd={() => setLoading(false)}
        />
      ) : (
        <Video
          source={{ uri: item.url }}
          style={styles.media}
          useNativeControls
          resizeMode="contain"
          isLooping
          onLoad={() => setLoading(false)}
        />
      )}
    </View>
  );
};

export default MediaItem;
