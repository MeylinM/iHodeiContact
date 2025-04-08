import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../style/HodeiPostStyle";
import FooterSocial from "../components/FooterSocial";
import Header from "../components/Header";
import InfoIcon from "react-native-vector-icons/Entypo";
import InfoModal from "../components/InfoModalPost";
import stylesGlobal from "../style/Styles";
import { obtenerPublicacionCompleta } from "../servidor/HodeiServer";
import MediaItem from "../components/MediaItem";
import { StatusBar } from "expo-status-bar";
const { width } = Dimensions.get("window");

const HodeiPost = () => {
  const route = useRoute();
  const { id } = route.params;
  console.log("ID recibido:", id);

  const [publication, setPublication] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const flatListRef = useRef();

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerPublicacionCompleta(id);
      setPublication(data);
    };
    cargar();
  }, [id]);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
  };
  const openPDF = (url) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  if (!publication) {
    return (
      <View style={styles.container}>
        <Header />
        <ActivityIndicator size="large" color="#044F8B" style={{ marginTop: 60 }} />
        <FooterSocial />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={stylesGlobal.infoButton}
        onPress={() => setModalVisible(true)}
      >
        <InfoIcon name="info" size={35} color="#F39C12" />
      </TouchableOpacity>

      <InfoModal visible={modalVisible} onClose={() => setModalVisible(false)} />

      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{publication.title}</Text>
        <Text style={styles.description}>{publication.description}</Text>

        <FlatList
          data={publication.media}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          onScroll={handleScroll}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <MediaItem item={item}/>}
          />

        {publication.pdfs && publication.pdfs.length > 0 && (
          <>
            <Text style={[styles.description, { marginTop: 20 }]}>Material complementario:</Text>
            {publication.pdfs.map((pdf, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => openPDF(pdf.url)}
                style={styles.downloadButton}
              >
                <Text style={styles.downloadText}>Descargar PDF {idx + 1}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
      </ScrollView>
      <FooterSocial />
    </View>
  );
};

export default HodeiPost;
