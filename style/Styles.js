import { StyleSheet } from "react-native";

/**
 * Estilos generales para la aplicación.
 * Define la apariencia y disposición de los componentes visuales.
 */
const styles = StyleSheet.create({
  /**
   * Estilo para el contenedor principal de la aplicación.
   * Se asegura de que los elementos estén centrados y con un fondo de color.
   */
  container: {
    flex: 1,
    backgroundColor: "#D7E7FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  infoButton: {
    position: "absolute",
    top: 35, // Espacio desde arriba
    right: 5, // Espacio desde la derecha
    padding: 10,
  },

  webIcon:{
    position: "absolute",
    top: 30, // Espacio desde arriba
    left: 10, // Espacio desde la derecha
    padding: 10,
    width: 40.5,
    height: 28.5,
  },
  /**
   * Estilo para la imagen del encabezado.
   * La imagen se coloca de manera absoluta, ocupando un ancho mayor y ajustándose a la altura deseada.
   */
  headerImage: {
    position: "absolute", 
    top: 35, 
    width: "155", 
    height: 150, 
    resizeMode: "cover", 
    marginBottom: 20, 
  },

  welcomeContainer: {
    alignItems: "center",
    marginTop: 10, // Ajusta el espacio superior
    marginBottom: 15, // Espacio debajo del texto
    paddingHorizontal: 20, // Para evitar que el texto se salga en pantallas pequeñas
  },
  welcomeTitle: {
    fontSize: 22,
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#044F8B",
    textAlign: "center",
    marginBottom: 10, // Espacio entre el título y la descripción
  },
  welcomeDescription: {
    fontSize: 18,
    fontFamily: "Montserrat",
    color: "#044F8B",
    textAlign: "center",
    lineHeight: 25, // Espaciado entre líneas
  },
  boldText: {
    fontWeight: "bold",
    color: "#0175BE", // Azul vibrante para resaltar palabras clave
  },
  
  /**
   * Estilo para la disposición de los elementos en cuadrícula.
   * Organiza los elementos en filas y permite que se ajusten cuando no haya suficiente espacio.
   */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },

  /**
   * Estilo para las tarjetas dentro de la cuadrícula.
   * Estas tarjetas tienen un color de fondo, padding, bordes redondeados y un tamaño específico.
   */
  card: {
    backgroundColor: "#D7E7FA",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150, 
    height: 150,
  },

  /** Estilo para los iconos de las funciones principales de la app */
  icon: {
    width: 120,
    height: 120,
  },

  /**
   * Estilo para una tarjeta seleccionada.
   * Cuando una tarjeta está seleccionada, cambia su color de fondo.
   */
  selectedCard: {
    backgroundColor: "#F39C12", 
  },

  /**
   * Estilo para la sección de iconos sociales en la parte inferior.
   * Los iconos se organizan en fila y se ajustan para diferentes tamaños de pantalla.
   */
  socialIcons: {
    position: "absolute", 
    bottom: 60,
    flexDirection: "row",
    justifyContent: "center",

  },

  socials: {
    width: 45,
    height: 45,
    marginHorizontal: 5,
  },

  /**
   * Estilo para el pie de página de la aplicación.
   * El pie de página contiene el texto que aparece en la parte inferior de la pantalla.
   */
  footer: {
    width: 101.5,
    height: 25,
    marginTop: 20,
    position: "absolute",
    bottom: 20,
  },
});
export default styles;