import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/HodeiNewsStyle";
import stylesGlobal from "../style/Styles";
import FooterSocial from "../components/FooterSocial";
import Header from "../components/Header";
import InfoIcon from "react-native-vector-icons/Entypo";
import InfoModal from "../components/InfoModalNews";

const publications = [
  {
    id: "1",
    title: "Gatos",
    media: [
      { type: "image", content: require("../assets/publicacion1.png") },
      { type: "image", content: require("../assets/publicacion1_2.png") },
    ],
    description: "Lorem ipsum...",
    pdf: "https://tusitio.com/kit.pdf",
  },
  {
    id: "2",
    title: "Vacas",
    media: [
      { type: "image", content: require("../assets/publicacion2.png") },
      { type: "image", content: require("../assets/publicacion2_2.png") },
    ],
    description: "Lorem ipsum...",
  },
  {
    id: "3",
    title: "Prezoso",
    media: [{ type: "image", content: require("../assets/publicacion3.png") }],
    description: "Lorem ipsum...",
    pdf: "https://tusitio.com/kit.pdf",
  },
  {
    id: "4",
    title: "Perro",
    media: [{ type: "image", content: require("../assets/publicacion4.png") }],
    description: "Lorem ipsum...",
    pdf: "https://tusitio.com/kit.pdf",
  },
  {
    id: "5",
    title: "iHodei",
    media: [{ type: "video", content: require("../assets/publicacion5.mp4") }],
    description: "Lorem ipsum...",
    pdf: "https://tusitio.com/kit.pdf",
  },
];

const HodeiNews = () => {
  // Estado para el modal de información
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("HodeiPost", { publication: item })}
    >
      <Image source={item.media[0].content} style={styles.image} />
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
        showsVerticalScrollIndicator={false}
      />
      {/* Redes Sociales */}
      <FooterSocial />
    </View>
  );
};

export default HodeiNews;
