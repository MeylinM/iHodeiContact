// components/InfoModalBase.js
import React from "react";
import {Image,Text } from "react-native";
import styles from "../style/InfoModalStyles";

const InfoModalBase = ({ onClose }) => {
  return (
    <>
      {/* Logo de la empresa */}

      <Image
        source={require("../assets/header.png")}
        style={styles.modalLogo}
      />

      {/* Título */}
      <Text style={styles.modalTitle}>Bienvenido al manual de usuario</Text>
    </>
  );
};

export default InfoModalBase;
