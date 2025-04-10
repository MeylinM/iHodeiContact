import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from "../style/SplashScreenStyles"; // Importamos los estilos

/**
 * Componente que muestra una pantalla inicial (Splash Screen) con el logo de la aplicación.
 * Tras un breve periodo de espera, redirige automáticamente al usuario a la pantalla principal.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.navigation - Objeto para gestionar la navegación entre pantallas.
 * @returns {JSX.Element} Pantalla inicial con logo temporal.
 *
 * @example
 * <SplashScreen navigation={navigation} />
 */

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula un tiempo de carga antes de ir a la pantalla principal
    setTimeout(() => {
      navigation.replace("HodeiContact"); // Cambia a la pantalla principal después de 3 segundos
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/pantallaCarga.png")} // Ruta de la imagen del logo
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;