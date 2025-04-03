// components/Header.js
import {TouchableOpacity, Image, Linking } from "react-native";
import styles from "../style/Styles";

const socialLinks = {
  website: "https://ihodei.com/",
  secret: "https://cloud.hodeicloud.com/",
};

const Header = () => {

  return (
    <>
      {/* Botón de ir a la página web */}
      <TouchableOpacity
        onPress={() => Linking.openURL(socialLinks.website)}
        style={styles.webIcon}
      >
        <Image
          source={require("../assets/icon-web.png")}
          style={styles.webIcon}
        />
      </TouchableOpacity>
      {/* Imagen logo de la empresa y botón secreto */}
      <TouchableOpacity onPress={() => Linking.openURL(socialLinks.secret)}>
        <Image
          source={require("../assets/header.png")}
          style={styles.headerImage}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;
