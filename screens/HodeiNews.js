import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HodeiNews = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias HodeiCloud</Text>
      <Text style={styles.body}>Aquí irán las últimas novedades, actualizaciones o avisos importantes.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#044F8B',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#044F8B',
    textAlign: 'center',
  },
});

export default HodeiNews;
