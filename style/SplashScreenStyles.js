import { StyleSheet } from "react-native";

const SplashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7E7FA",
  },
  logo: {
    flex: 1, // Hace que la imagen ocupe toda la pantalla
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ajusta la imagen sin distorsionarla
  },
});

export default SplashScreenStyles;