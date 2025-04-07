import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../style/HodeiPostStyle";
import FooterSocial from "../components/FooterSocial";
import Header from "../components/Header";
import InfoIcon from "react-native-vector-icons/Entypo";
import InfoModal from "../components/InfoModalPost";
import stylesGlobal from "../style/Styles";
import { Video } from "expo-av";

const { width } = Dimensions.get("window");

const HodeiPost = () => {
  const route = useRoute();
  const { publication } = route.params; // 👈 Aquí obtenemos la publicación enviada

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const flatListRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentMediaIndex(index);
  };

  const openPDF = () => {
    if (publication.pdf) {
      Linking.openURL(publication.pdf);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={stylesGlobal.infoButton}
        onPress={() => setModalVisible(true)}
      >
        <InfoIcon name="info" size={35} color="#F39C12" />
      </TouchableOpacity>

      <InfoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{publication.title}</Text>
        <Text style={styles.description}>{publication.description}</Text>

        <FlatList
          data={publication.media}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          onScroll={handleScroll}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              {item.type === "image" ? (
                <Image source={item.content} style={styles.media} />
              ) : (
                <Video
                  source={item.content}
                  style={styles.media}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  shouldPlay
                />
              )}
            </View>
          )}
        />

        {publication.pdf && (
          <TouchableOpacity onPress={openPDF} style={styles.downloadButton}>
            <Text style={styles.downloadText}>Descargar</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      <FooterSocial />
    </View>
  );
};

export default HodeiPost;
