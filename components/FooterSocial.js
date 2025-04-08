// components/FooterSocial.js
import React from 'react';
import { View, TouchableOpacity, Image, Linking } from 'react-native';
import styles from '../style/Styles'; // Usa el style global que ya tienes

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
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.facebook)}>
        <Image source={require("../assets/icon-facebook.png")} style={styles.socials} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.instagram)}>
        <Image source={require("../assets/icon-instagram.png")} style={styles.socials} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.linkedin)}>
        <Image source={require("../assets/icon-linkedin.png")} style={styles.socials} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.tiktok)}>
        <Image source={require("../assets/icon-tiktok.png")} style={styles.socials} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.youtube)}>
        <Image source={require("../assets/icon-youtube.png")} style={styles.socials} />
      </TouchableOpacity>
    </View>
  );
};

export default FooterSocial;
