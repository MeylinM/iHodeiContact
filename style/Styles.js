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

  /**
   * Estilo para la imagen del encabezado.
   * La imagen se coloca de manera absoluta, ocupando un ancho mayor y ajustándose a la altura deseada.
   */
  headerImage: {
    position: "absolute", 
    top: 0, 
    width: "112%", 
    height: 300, 
    resizeMode: "cover", 
    marginBottom: 20, 
  },

  /**
   * Estilo para la disposición de los elementos en cuadrícula.
   * Organiza los elementos en filas y permite que se ajusten cuando no haya suficiente espacio.
   */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 160,
  },

  /**
   * Estilo para las tarjetas dentro de la cuadrícula.
   * Estas tarjetas tienen un color de fondo, padding, bordes redondeados y un tamaño específico.
   */
  card: {
    backgroundColor: "#044F8B",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 28,
    width: 120.36, 
    height: 120.36,
  },

  /**
   * Estilo para el texto dentro de las tarjetas.
   * El texto está centrado y tiene un color contrastante con el fondo de la tarjeta.
   */
  text: {
    color: "#D7E7FA",
    marginTop: 1,
    fontWeight: "bold",
    textAlign: "center",
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
  socials: {
    flexDirection: "row",
    marginTop: 50,
    width: "90%",
    justifyContent: "space-around",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 60,
  },

  /**
   * Estilo para el pie de página de la aplicación.
   * El pie de página contiene el texto que aparece en la parte inferior de la pantalla.
   */
  footer: {
    marginTop: 20,
    color: "#044F8B",
    fontWeight: "bold",
    fontSize: 18,
    position: "absolute",
    bottom: 20,
  },
});
export default styles;