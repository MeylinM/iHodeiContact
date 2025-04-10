// components/InfoModalBase.js
import React from "react";
import {Image,Text } from "react-native";
import styles from "../style/InfoModalStyles";
/**
 * Componente base para mostrar contenido introductorio en un modal.
 * Incluye el logo de la empresa y un título de bienvenida.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.onClose - Función opcional para cerrar el modal (actualmente no usada directamente).
 * @returns {JSX.Element} Contenido visual introductorio para modales informativos.
 *
 * @example
 * <InfoModalBase onClose={() => setVisible(false)} />
 */
const InfoModalBase = ({ onClose }) => {
  return (
    <>
      {/* Logo de la empresa */}
      <Image
        source={require("../assets/header.png")}
        style={styles.modalLogo}
      />
      {/* Título del modal */}
      <Text style={styles.modalTitle}>Bienvenido al manual de usuario</Text>
    </>
  );
};

export default InfoModalBase;
