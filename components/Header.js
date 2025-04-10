// components/Header.js
import { TouchableOpacity, Image, Linking } from "react-native";
import styles from "../style/Styles";

/**
 * Componente que muestra el header con el logo de la empresa y botones interactivos.
 * Incluye un botón para acceder a la página web principal y otro botón secreto hacia un enlace oculto.
 *
 * @component
 * @returns {JSX.Element} Header con imágenes clicables.
 *
 * @example
 * <Header />
 */

// Enlaces utilizados por los botones del header
const socialLinks = {
  website: "https://ihodei.com/",
  secret: "https://cloud.hodeicloud.com/",
};

const Header = () => {
  return (
    <>
      {/* Botón para abrir la página web oficial */}
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
