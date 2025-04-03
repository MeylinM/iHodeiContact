import React from "react";
import { View, Text, TouchableOpacity,Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/InfoModalStyles"; // Importamos los estilos
import InfoModalBase from "./InfoModalBase"; // Importamos el componente base

const InfoModalNews = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Botón para cerrar el modal */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon
              name="close"
              size={25}
              color="#044F8B"
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <InfoModalBase />

          {/* Descripción */}
          <Text style={styles.modalText}>
            En esta pantalla podrás encontrar todas las noticias de iHodei, solo
            debes seleccionar la publicación que mas te interesa y
            automáticamente se te mostrará la ventana que tiene el articulo completo.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModalNews;
