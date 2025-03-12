import React from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/InfoModalStyles"; // Importamos los estilos

const InfoModal = ({ visible, onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Botón para cerrar el modal */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={25} color="#044F8B" style={styles.closeIcon} />
          </TouchableOpacity>

          {/* Logo de la empresa */}
          <Image source={require("../assets/header.png")} style={styles.modalLogo} />

          {/* Título */}
          <Text style={styles.modalTitle}>Bienvenido al manual de usuario</Text>

          {/* Descripción */}
          <Text style={styles.modalText}>
            iHodei Contact es tu acceso directo a nuestros servicios en la nube y soporte técnico.
            Nuestro objetivo es ofrecerte una experiencia rápida, sencilla y eficiente para gestionar todo en un solo lugar.
          </Text>

          {/* Lista de funcionalidades */}
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <Image source={require("../assets/icon-contact.png")} style={styles.featureIcon} />
              <Text style={styles.featureText}>Contactar con nuestro equipo para resolver dudas.</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require("../assets/icon-soporte.png")} style={styles.featureIcon} />
              <Text style={styles.featureText}>Recibir asistencia a través de WhatsApp.</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require("../assets/icon-exocloud.png")} style={styles.featureIcon} />
              <Text style={styles.featureText}>Acceder a ExoCloud.</Text>
            </View>
            <View style={styles.featureItem}>
              <Image source={require("../assets/icon-hodeicloud.png")} style={styles.featureIcon} />
              <Text style={styles.featureText}>Acceder a la intranet de HodeiCloud.</Text>
            </View>
          </View>

          {/* Redes sociales */}
          <View style={styles.socialIcons}>
            <Image source={require("../assets/icon-web.png")} style={styles.webIcon} />
            <Image source={require("../assets/icon-facebook.png")} style={styles.socialIcon} />
            <Image source={require("../assets/icon-instagram.png")} style={styles.socialIcon} />
            <Image source={require("../assets/icon-linkedin.png")} style={styles.socialIcon} />
            <Image source={require("../assets/icon-tiktok.png")} style={styles.socialIcon} />
            <Image source={require("../assets/icon-youtube.png")} style={styles.socialIcon} />
          </View>

          <Text style={styles.modalFooterText}>
            Conéctate a nuestras redes sociales y mantente informado sobre novedades y actualizaciones.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;