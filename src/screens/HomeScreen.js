import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao Leitor de Medidores</Text>
      <Text style={styles.texto}>
        Este aplicativo ajuda o leiturista a interpretar a leitura dos medidores analógicos.
        Os ponteiros representam unidade, dezena, centena e milhar, e cada um
        avança o próximo como engrenagens.
      </Text>
      <Button
        title="Começar leitura"
        onPress={() => navigation.navigate('PainelDeMedidores')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fedc57',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    marginBottom: 30,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;