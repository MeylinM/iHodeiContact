import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/HodeiNewsStyle";
import stylesGlobal from "../style/Styles";
import FooterSocial from "../components/FooterSocial";
import Header from "../components/Header";
import InfoIcon from "react-native-vector-icons/Entypo";
import InfoModal from "../components/InfoModalNews";
import { obtenerPublicacionesPreview } from "../servidor/HodeiServer";

const HodeiNews = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [publications, setPublications] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerPublicacionesPreview();
      setPublications(data);
    };
    cargar();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("HodeiPost", { id: item.id })}
    >
      <Image source={{ uri: item.imgUrl }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

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
      <FlatList
        data={publications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        scrollEnabled={true}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
      {/* Redes Sociales */}
      <FooterSocial />
    </View>
  );
};

export default HodeiNews;
