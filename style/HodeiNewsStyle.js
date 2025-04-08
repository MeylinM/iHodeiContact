import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");
const cardWidth = width * 0.44;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E7FA',
    alignItems: 'center',
    paddingTop: 30,
  },
  logo: {
    width: width * 0.35,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  grid: {
    width: "100%", 
    paddingBottom: 100,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    margin: 8,
    backgroundColor: '#B3D5F1',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: cardWidth,
    resizeMode: 'cover',
  },
  titleContainer: {
    padding: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#044F8B',
    textAlign: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },    
});
