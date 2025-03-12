import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from "../style/SplashScreenStyles"; // Importamos los estilos

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