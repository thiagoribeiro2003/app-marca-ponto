import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  Pressable,
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function () {
  var dia = new Date().getDate();
  var mes = new Date().getMonth() + 1;
  var ano = new Date().getFullYear();
  var hora = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();

  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  useEffect(() => {
    async function obterLocalizacao() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      let localizacaoAtual = await Location.getCurrentPositionAsync({});

      setMinhaLocalizacao();
    }
  }, []);

  console.log(minhaLocalizacao);

  const regiaoInicial = {
    // Estado de SP
    minhaLocalizacao,
  };

  return (
    <>
      <ScrollView contentContainerStyle={estilos.contentContainer}>
        <SafeAreaView style={estilos.safeContainer}>
          <Text style={estilos.titulo}>App 2 - Marcação de Ponto</Text>
          <View style={estilos.mapa}>
            <MapView
              style={{ width: "100%", height: 200 }}
              liteMode={false}
              mapType="standard"
              userInterfaceStyle="dark"
            ></MapView>
          </View>

          <Text style={estilos.data}>
            {" "}
            {hora +
              ":" +
              min +
              " " +
              "-" +
              " " +
              dia +
              "/" +
              mes +
              "/" +
              ano}{" "}
          </Text>

          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "gray" : "#f4f4f4",
              },
              estilos.botaoPonto,
            ]}
            onPress={() => {
              Alert.alert("Registro", "Ponto registrado com sucesso!");
            }}
          >
            <Text style={estilos.textoBotao}>Marcar ponto</Text>
          </Pressable>
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
    marginTop: 80,
  },
  mapa: {
    // bloco em sobre o mapa
    marginTop: 50,
    height: 200,
    width: "100%",
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    borderRadius: 10,
  },
  data: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "5%",
  },
  botaoPonto: {
    marginTop: 20,
    borderWidth: 1,
    height: 54,
    width: "90%",
    marginLeft: 20,
  },
  textoBotao: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
});
