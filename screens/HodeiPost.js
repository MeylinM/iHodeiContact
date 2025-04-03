import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import styles from "../style/HodeiPostStyle";
import FooterSocial from "../components/FooterSocial";
import Header from "../components/Header";
import InfoIcon from "react-native-vector-icons/Entypo";
import InfoModal from "../components/InfoModalPost";
import stylesGlobal from "../style/Styles";


const { width } = Dimensions.get("window");

// Simulación de una única publicación con múltiples imágenes/videos
const publication = {
  id: "1",
  title: "Título Publicación",
  description: "Descripción de la publicación.",
  media: [
    { type: "image", content: require("../assets/publicacion1.png") },
    { type: "image", content: require("../assets/publicacion2.png") },
    // { type: "video", content: require("../assets/demo.mp4") },
  ],
  pdf: "https://tusitio.com/archivo.pdf", // Opcional: coméntalo para ocultar botón
};

const HodeiNews = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const flatListRef = useRef();

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentMediaIndex(index);
  };

  // Estado para el modal de información
  const [modalVisible, setModalVisible] = useState(false);

  const openPDF = () => {
    if (publication.pdf) {
      Linking.openURL(publication.pdf);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      {/* Botón de información */}
      <TouchableOpacity
        style={stylesGlobal.infoButton}
        onPress={() => setModalVisible(true)}
      >
        <InfoIcon name="info" size={35} color="#F39C12" />
      </TouchableOpacity>

      {/* Modal de información */}
      <InfoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
      {/* Texto fijo */}
      <Text style={styles.title}>{publication.title}</Text>
      <Text style={styles.description}>{publication.description}</Text>

      {/* Carrusel de imagen o video */}
      <FlatList
        data={publication.media}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onScroll={handleScroll}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {item.type === "image" ? (
              <Image source={item.content} style={styles.media} />
            ) : (
              <Text style={styles.mediaPlaceholder}>[Video aquí]</Text>
            )}
          </View>
        )}
      />

      {/* Botón de descarga si hay PDF */}
      {publication.pdf && (
        <TouchableOpacity onPress={openPDF} style={styles.downloadButton}>
          <Text style={styles.downloadText}>Descargar</Text>
        </TouchableOpacity>
      )}

      {/* Redes sociales */}
      <FooterSocial />
    </View>
  );
};

export default HodeiNews;
