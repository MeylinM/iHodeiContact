// components/FooterSocial.js
import React from "react";
import { View, TouchableOpacity, Image, Linking } from "react-native";
import styles from "../style/Styles";

/**
 * Componente que muestra un footer con iconos enlazados a redes sociales.
 *
 * @component
 * @returns {JSX.Element} Footer con iconos interactivos para redes sociales.
 *
 * @example
 * <FooterSocial />
 */

// URLs para las redes sociales usadas en el componente
const socialLinks = {
  facebook: "https://www.facebook.com/iHodei/",
  instagram: "https://www.instagram.com/ihodeicloud/",
  linkedin: "https://es.linkedin.com/company/ihodeicloud",
  tiktok: "https://www.tiktok.com/@ihodeicloud",
  youtube: "https://www.youtube.com/channel/UCXu9csa1KbvWv62vx7cCsVA",
};

const FooterSocial = () => {
  return (
    <View style={styles.socialIcons}>
      {/* Facebook */}
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.facebook)}>
        <Image
          source={require("../assets/icon-facebook.png")}
          style={styles.socials}
        />
      </TouchableOpacity>
      {/* Instagram */}
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.instagram)}>
        <Image
          source={require("../assets/icon-instagram.png")}
          style={styles.socials}
        />
      </TouchableOpacity>
      {/* LinkedIn */}
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.linkedin)}>
        <Image
          source={require("../assets/icon-linkedin.png")}
          style={styles.socials}
        />
      </TouchableOpacity>
      {/* TikTok */}
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.tiktok)}>
        <Image
          source={require("../assets/icon-tiktok.png")}
          style={styles.socials}
        />
      </TouchableOpacity>
      {/* YouTube */}
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.youtube)}>
        <Image
          source={require("../assets/icon-youtube.png")}
          style={styles.socials}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FooterSocial;
