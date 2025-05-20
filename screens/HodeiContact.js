import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/Styles"; // Importamos los estilos desde la carpeta styles
import FooterSocial from "../components/FooterSocial";
import Header from "../components/Header";
import InfoIcon from "react-native-vector-icons/Entypo";
import InfoModal from "../components/InfoModalMain"; // Importamos el componente InfoModal
/**
 * Componente HodeiContact.
 *
 * Componente principal para la pantalla de contacto de iHodei.
 * Ofrece acceso rápido a diferentes servicios mediante tarjetas interactivas,
 * enlaces directos a soporte, ExoCloud, HodeiCloud, y sección de noticias.
 *
 * @component
 * @returns {JSX.Element} Pantalla interactiva con botones y enlaces de contacto.
 *
 * @example
 * <HodeiContact />
 */
const HodeiContact = () => {
  // Estado para el modal de información
  const [modalVisible, setModalVisible] = useState(false);

  // Estado para la tarjeta seleccionada
  const [selectedCard, setSelectedCard] = useState(null);

  // Enlaces de cada tarjeta
  const cardLinks = {
    contacto:
      "https://api.whatsapp.com/send?phone=34689817111&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20el%20Kit%20Digital.",
    soporte: "https://api.whatsapp.com/send?phone=34602216188",
    exocloud: "https://intranet.exocloud.es/user/login",
    hodeicloud: "https://intranet.hodeicloud.com/user/login",
  };

  /**
   * Abre el enlace correspondiente cuando se pulsa una tarjeta.
   * @param {string} card - Nombre identificador de la tarjeta.
   */
  const handlePress = (card) => {
    Linking.openURL(cardLinks[card]);
  };

  /**
   * Marca visualmente la tarjeta cuando es pulsada.
   * @param {string} card - Nombre identificador de la tarjeta seleccionada.
   */
  const handlePressIn = (card) => {
    setSelectedCard(card);
  };

  /**
   * Restablece la selección visual cuando la tarjeta es liberada.
   */
  const handlePressOut = () => {
    setSelectedCard(null);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      {/* Botón de información */}
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() => setModalVisible(true)}
      >
        <InfoIcon name="info" size={35} color="#F39C12" />
      </TouchableOpacity>

      {/* Modal de información */}
      <InfoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      {/* Contenedor de Bienvenida */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>¡Bienvenido a iHodei Contact!</Text>
        <Text style={styles.welcomeDescription}>
          La aplicación que revoluciona la forma en que nos contactas:
          <Text style={styles.boldText}>
            {"\n"}rápida, práctica y eficiente.{" "}
          </Text>
          {"\n"}
          <Text style={styles.boldText}>¡</Text>Todo en un solo espacio
          <Text style={styles.boldText}>!</Text>
        </Text>
      </View>

      {/* Cuadrícula de Tarjetas con Scroll */}
      <ScrollView
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      >
        {/* Tarjeta de Contacto */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === "contacto" && styles.selectedCard,
          ]}
          onPressIn={() => handlePressIn("contacto")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("contacto")}
        >
          <Image
            source={require("../assets/icon-contact.png")}
            style={[styles.icon_image]}
          />
        </TouchableOpacity>

        {/* Tarjeta de Soporte */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === "soporte" && styles.selectedCard,
          ]}
          onPressIn={() => handlePressIn("soporte")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("soporte")}
        >
          <Image
            source={require("../assets/icon-soporte.png")}
            style={[styles.icon_image]}
          />
        </TouchableOpacity>

        {/* Tarjeta de ExoCloud */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === "exocloud" && styles.selectedCard,
          ]}
          onPressIn={() => handlePressIn("exocloud")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("exocloud")}
        >
          <Image
            source={require("../assets/icon-exocloud.png")}
            style={[styles.icon_image]}
          />
        </TouchableOpacity>

        {/* Tarjeta de HodeiCloud */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === "hodeicloud" && styles.selectedCard,
          ]}
          onPressIn={() => handlePressIn("hodeicloud")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("hodeicloud")}
        >
          <Image
            source={require("../assets/icon-hodeicloud.png")}
            style={[styles.icon_image]}
          />
        </TouchableOpacity>

        {/* Tarjeta de foro noticias*/}
        <TouchableOpacity
          style={[
            styles.card,
            selectedCard === "HodeiNews" && styles.selectedCard,
          ]}
          onPressIn={() => handlePressIn("HodeiNews")}
          onPressOut={handlePressOut}
          onPress={() => navigation.navigate("HodeiNews")}
        >
          <Image
            source={require("../assets/icon-more.png")}
            style={[styles.icon_image]}
          />
        </TouchableOpacity>
      </ScrollView>

      {/* Footer Redes Sociales */}
      <FooterSocial />
    </View>
  );
};

export default HodeiContact;
