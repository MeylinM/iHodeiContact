import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
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
    description:
      "El gato o gato doméstico (Felis silvestris catus) es un pequeño mamífero carnívoro de la familia Felidae. El gato está en convivencia cercana al ser humano desde hace unos 9.500 años,[1] periodo superior al estimado anteriormente, que oscilaba entre 3.500 y 8.000 años." +
      "Los nombres actuales más generalizados derivan del latín vulgar catus, palabra que aludía especialmente a los gatos salvajes en contraposición a los gatos domésticos que, en latín, eran llamados felis.",
    pdf: "../assets/lalalala.pdf",
  },
  {
    id: "2",
    title: "Vacas",
    media: [
      { type: "image", content: require("../assets/publicacion2.png") },
      { type: "image", content: require("../assets/publicacion2_2.png") },
    ],
    description: "La vaca, en el caso de la hembra, o toro, en el caso del macho (Bos taurus), es un mamífero artiodáctilo de la familia de los bóvidos. Anteriormente era considerado una subespecie de Bos primigenius, pero un estudio reciente lo considera una especie distinta.",
  },
  {
    id: "3",
    title: "Prezoso",
    media: [{ type: "image", content: require("../assets/publicacion3.png") }],
    description: "Los llaman perezosos porque suelen pasar hasta 18 horas durmiendo y se mueven muy lento.",
  
  },
  {
    id: "4",
    title: "Perro",
    media: [{ type: "image", content: require("../assets/publicacion4.png") }],
    description: "El perro (Canis familiaris o Canis lupus familiaris, dependiendo de si se lo considera una especie o una subespecie del lobo),​ llamado perro doméstico o can,​ y en algunos lugares coloquialmente llamado chucho,​ tuso,​ choco,entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.En el 2013, la población mundial estimada de perros estaba entre setecientos millones y novecientos ochenta y siete millones.",
 
  },
  {
    id: "5",
    title: "iHodei",
    media: [{ type: "video", content: require("../assets/publicacion5.mp4") }],
    description: "Te ayudamos en el asesoramiento y tramitación del Programa Kit Digital que mejor se adapten a las necesidades de tu negocio. Tambien te ayudamos con la solicitud del mismo para que puedas dar un paso más en la digitalización de tu negocio.",
 
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
