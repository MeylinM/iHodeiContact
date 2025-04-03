import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7E7FA",
    alignItems: "center",
  },
  logo: {
    width: width * 0.35,
    height: 80,
    marginTop: 30,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 20,
    textAlign: "center",
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
    backgroundColor: "#0175BE",
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
    marginTop: 15,
    marginBottom: 10,
  },
  downloadText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  socialIcons: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 12,
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});
