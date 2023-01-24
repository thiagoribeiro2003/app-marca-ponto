import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Alert } from "react-native";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location"

export default function () {
  return (
    <>
      <ScrollView contentContainerStyle={estilos.contentContainer}>
        <SafeAreaView style={estilos.safeContainer}>
          <Text style={estilos.titulo}>App 2 - Marcação de Ponto</Text>
          <View style={estilos.mapa}>
      
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const estilos = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 1,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 60,
  },
});
