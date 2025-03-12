import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#E7F1FB",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  modalLogo: {
    width: 84.7,
    height: 81.89,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#044F8B",
    textAlign: "center",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 15,
    color: "#044F8B",
    textAlign: "center",
    marginBottom: 15,
  },
  featureList: {
    width: "100%",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "100%", // Se asegura de que los elementos no se salgan del modal
    paddingHorizontal: 10, // Espaciado interno para evitar bordes pegados
  },
  featureIcon: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  featureText: {
    fontSize: 15,
    color: "#044F8B",
    flexWrap: "wrap", // Permite que el texto pase a la siguiente línea
    flex: 1, // Hace que el texto ocupe el espacio disponible sin salir del modal
    width: "90%", // Limita el ancho para que no se salga del recuadro
    paddingRight: 10, // Espaciado extra para evitar que las palabras toquen los bordes
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  socialIcon: {
    width: 33,
    height: 33,
    marginHorizontal: 5,
  },
  webIcon:{
    width: 44,
    height: 30,
    marginTop: 2.5,
    marginHorizontal: 5
  },
  modalFooterText: {
    fontSize: 15,
    color: "#044F8B",
    textAlign: "center",
    marginTop: 10,
  },
});

export default styles;