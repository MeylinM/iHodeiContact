import React, { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Video } from "expo-av";
import styles from "../style/HodeiPostStyle";

const MediaItem = ({ item }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.slide}>
      {loading && (
        <ActivityIndicator size="large" color="#044F8B" style={styles.loader} />
      )}

      {item.type === "image" ? (
        <Image
          source={{ uri: item.url }}
          style={styles.media}
          onLoadEnd={() => setLoading(false)}
        />
      ) : (
        <Video
          source={{ uri: item.url }}
          style={styles.media}
          useNativeControls
          resizeMode="contain"
          isLooping
          onLoad={() => setLoading(false)}
        />
      )}
    </View>
  );
};

export default MediaItem;
