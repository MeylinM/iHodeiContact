import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import InfoIcon from "react-native-vector-icons/Entypo";
import styles from "../style/Styles"; // Importamos los estilos desde la carpeta styles
import InfoModal from "../components/InfoModal"; // Importamos el componente InfoModal

/**
 * Componente HodeiContact.
 *
 * Este componente renderiza una interfaz con botones para redirigir a diferentes enlaces de contacto y redes sociales.
 * Incluye tarjetas interactivas para contactar, soporte, y acceder a plataformas ExoCloud y HodeiCloud, además de íconos para redes sociales.
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

  // Links de redes sociales
  const socialLinks = {
    facebook: "https://www.facebook.com/iHodei/",
    instagram: "https://www.instagram.com/ihodeicloud/",
    linkedin: "https://es.linkedin.com/company/ihodeicloud",
    website: "https://ihodei.com/",
    tiktok: "https://www.tiktok.com/@ihodeicloud",
    x: "https://x.com/CloudHodei",
    youtube: "https://www.youtube.com/channel/UCXu9csa1KbvWv62vx7cCsVA",
    secret:"https://cloud.hodeicloud.com/",
  };

  /**
   * Maneja el clic en las tarjetas y abre el enlace correspondiente.
   * @param {string} card - Nombre de la tarjeta (contacto, soporte, exocloud, hodeicloud).
   */
  const handlePress = (card) => {
    Linking.openURL(cardLinks[card]);
  };

  /**
   * Maneja el evento cuando se presiona una tarjeta, cambiando el estado de la tarjeta seleccionada.
   * @param {string} card - Nombre de la tarjeta seleccionada.
   */
  const handlePressIn = (card) => {
    setSelectedCard(card);
  };

  /**
   * Maneja el evento cuando se suelta una tarjeta, restableciendo la selección.
   */
  const handlePressOut = () => {
    setSelectedCard(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.website)} style={styles.webIcon} >
        <Image source={require("../assets/icon-web.png")} style={styles.webIcon} />
      </TouchableOpacity>

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

      {/* HEADER FIJO */}
      <TouchableOpacity
          onPress={() => Linking.openURL(socialLinks.secret)}
        >
      <Image
        source={require("../assets/header.png")}
        style={styles.headerImage}
      />
      </TouchableOpacity>
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

      {/* Cuadrícula de Tarjetas */}
      <View style={styles.grid}>
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
            style={[styles.icon]}
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
            style={[styles.icon]}
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
            style={[styles.icon]}
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
            style={[styles.icon]}
          />
        </TouchableOpacity>
      </View>

      {/* Redes Sociales */}
      <View style={styles.socialIcons}>
        {/* Iconos de Redes Sociales */}

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.facebook)}>
          <Image
            source={require("../assets/icon-facebook.png")}
            style={styles.socials}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(socialLinks.instagram)}
        >
          <Image
            source={require("../assets/icon-instagram.png")}
            style={styles.socials}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.linkedin)}>
          <Image
            source={require("../assets/icon-linkedin.png")}
            style={styles.socials}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.tiktok)}>
          <Image
            source={require("../assets/icon-tiktok.png")}
            style={styles.socials}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.youtube)}>
          <Image
            source={require("../assets/icon-youtube.png")}
            style={styles.socials}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HodeiContact;
