import { StyleSheet, Dimensions } from "react-native";

// Obtener dimensiones de la pantalla
const { width, height } = Dimensions.get("window");

// Detectar si el dispositivo es una tablet (usamos 600px como referencia)
const isTablet = width > 600;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7E7FA",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: isTablet ? 40 : 20, // Más espacio en tablets
  },

  infoButton: {
    position: "absolute",
    top: height * (isTablet ? 0.04 : 0.05), // Baja un poco en tablets
    right: width * 0.02,
    padding: 10,
  },

  webIcon: {
    position: "absolute",
    top: height * (isTablet ? 0.025 : 0.032),
    left: width * 0.02,
    width: width * (isTablet ? 0.07 : 0.1), // Icono más pequeño en tablets
    height: height * (isTablet ? 0.04 : 0.05),
    resizeMode: "contain",
  },

  headerImage: {
    marginTop: height * (isTablet ? 0.001 : 0.03), // Ajuste fino para tablets
    width: width * (isTablet ? 0.4 : 0.5), // Reduce en tablets
    height: height * (isTablet ? 0.12 : 0.15),
    resizeMode: "contain",
    marginBottom: 10,
  },

  welcomeContainer: {
    alignItems: "center",
    marginTop: height * 0.00001,
    marginBottom: height * 0.00002,
    paddingHorizontal: width * 0.05,
  },

  welcomeTitle: {
    fontSize: width * (isTablet ? 0.045 : 0.055),
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#044F8B",
    textAlign: "center",
    marginBottom: height * 0.01,
  },

  welcomeDescription: {
    fontSize: width * (isTablet ? 0.035 : 0.045),
    fontFamily: "Montserrat",
    color: "#044F8B",
    textAlign: "center",
    lineHeight: height * 0.03,
  },

  boldText: {
    fontWeight: "bold",
    color: "#0175BE",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    marginTop: height * 0.001,
    marginBottom: height * 0.03,
    rowGap: isTablet ? 1 : 4,
    gap: height * (isTablet ? 0.04 : 0.01), // Mayor separación en tablets
  },

  card: {
    backgroundColor: "#D7E7FA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * (isTablet ? 0.28 : 0.38), // Más pequeños en tablets
    height: width * (isTablet ? 0.28 : 0.38),
  },

  icon_image: {
    width: width * (isTablet ? 0.28 : 0.34), // Iconos más pequeños en tablets
    height: width * (isTablet ? 0.28 : 0.34),
    resizeMode: "contain",
  },

  selectedCard: {
    backgroundColor: "#F39C12",
  },

  socialIcons: {
    position: "absolute",
    bottom: isTablet ? 30 : 20, // margen inferior seguro en ambos
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },

  socials: {
    width: width * (isTablet ? 0.08 : 0.1), // Iconos de redes más pequeños en tablets
    height: width * (isTablet ? 0.08 : 0.1),
    marginHorizontal: width * 0.02,
    resizeMode: "contain",
  },
});

export default styles;
