import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7E7FA",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    color: "#044F8B",
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  media: {
    width: width * 0.9,
    height: width * 0.9,
    resizeMode: "cover",
    backgroundColor: "#d7e7fa",
  },
  mediaPlaceholder: {
    width: width * 0.9,
    height: width * 0.9,
    backgroundColor: "#0175BE",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    padding: 20,
  },
  downloadButton: {
    marginTop: 20,
    marginBottom:70,
    backgroundColor: "#F39C12",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  
  downloadText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  
  scrollContent: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loader: {
    position: "absolute",
    top: "45%",
    alignSelf: "center",
    zIndex: 2,
  }, 
});
