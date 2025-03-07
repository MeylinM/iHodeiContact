import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import TikTok from "react-native-vector-icons/Ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXTwitter, faTeamspeak } from "@fortawesome/free-brands-svg-icons";
import styles from "../style/Styles"; // Importamos los estilos desde la carpeta styles

/**
 * Componente HodeiContact.
 * 
 * Este componente renderiza una interfaz con botones para redirigir a diferentes enlaces de contacto y redes sociales.
 * Incluye tarjetas interactivas para contactar, soporte, y acceder a plataformas ExoCloud y HodeiCloud, además de íconos para redes sociales.
 */

const HodeiContact = () => {

  // Estado para la tarjeta seleccionada
  const [selectedCard, setSelectedCard] = useState(null);

  // Enlaces de cada tarjeta
  const cardLinks = {
    contacto:"https://api.whatsapp.com/send?phone=34689817111&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20el%20Kit%20Digital.",
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
      {/* HEADER FIJO */}
      <Image
        source={require("../assets/header.png")}
        style={styles.headerImage}
      />

      <View style={styles.grid}>
        {/* Tarjeta de Contacto */}
        <TouchableOpacity
          style={[styles.card, selectedCard === "contacto" && styles.selectedCard]}
          onPressIn={() => handlePressIn("contacto")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("contacto")}
        >
          <Icon name="whatsapp" size={75.2} color="#D7E7FA" />
          <Text style={styles.text}>Contacto</Text>
        </TouchableOpacity>

        {/* Tarjeta de Soporte */}
        <TouchableOpacity
          style={[styles.card, selectedCard === "soporte" && styles.selectedCard]}
          onPressIn={() => handlePressIn("soporte")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("soporte")}
        >
          <FontAwesomeIcon icon={faTeamspeak} size={75.2} style={{ color: "#D7E7FA" }} />
          <Text style={styles.text}>Soporte</Text>
        </TouchableOpacity>

        {/* Tarjeta de ExoCloud */}
        <TouchableOpacity
          style={[styles.card, selectedCard === "exocloud" && styles.selectedCard]}
          onPressIn={() => handlePressIn("exocloud")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("exocloud")}
        >
          <Icon name="server" size={75.2} color="#D7E7FA" />
          <Text style={styles.text}>ExoCloud</Text>
        </TouchableOpacity>

        {/* Tarjeta de HodeiCloud */}
        <TouchableOpacity
          style={[styles.card, selectedCard === "hodeicloud" && styles.selectedCard]}
          onPressIn={() => handlePressIn("hodeicloud")}
          onPressOut={handlePressOut}
          onPress={() => handlePress("hodeicloud")}
        >
          <Icon name="cloud" size={75.2} color="#D7E7FA" />
          <Text style={styles.text}>HodeiCloud</Text>
        </TouchableOpacity>
      </View>

      {/* Redes Sociales */}
      <View style={styles.socials}>
        {/* Iconos de Redes Sociales */}
        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.facebook)}>
          <Icon name="facebook-f" size={30} color="#F39C12" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.instagram)}>
          <Icon name="instagram" size={30} color="#F39C12" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.linkedin)}>
          <Icon name="linkedin" size={30} color="#F39C12" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.website)}>
          <IconSimple name="globe" size={30} color="#F39C12" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.tiktok)}>
          <TikTok name="logo-tiktok" size={30} color="#F39C12" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.x)}>
          <FontAwesomeIcon icon={faXTwitter} size={30} style={{ color: "#F39C12" }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(socialLinks.youtube)}>
          <Icon name="youtube-play" size={30} color="#F39C12" />
        </TouchableOpacity>
      </View>

      {/* Pie de Página */}
      <Text style={styles.footer}>HodeiCloud</Text>
    </View>
  );
};

export default HodeiContact;