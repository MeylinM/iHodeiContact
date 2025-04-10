import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../style/InfoModalStyles";
import InfoModalBase from "./InfoModalBase";

/**
 * Componente que muestra un modal informativo sobre la pantalla detallada de una publicación.
 * Indica cómo interactuar con imágenes, videos y documentos del artículo seleccionado.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.visible - Determina la visibilidad del modal.
 * @param {function} props.onClose - Función para cerrar el modal.
 * @returns {JSX.Element} Modal descriptivo sobre cómo interactuar con la vista detallada de publicaciones.
 *
 * @example
 * <InfoModalPost visible={modalVisible} onClose={() => setModalVisible(false)} />
 */

const InfoModalPost = ({ visible, onClose }) => {
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
            En esta pantalla encontrarás el articulo que seleccionaste
            anteriormente, si el articulo tiene mas de una imagen o video, lo
            podrá observar usando el carrusel. Además en caso de que este
            articulo tenga un documento, podrá descargarlo.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModalPost;
