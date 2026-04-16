import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao Leitor de Medidores</Text>
      <Text style={styles.texto}>
        Este aplicativo foi criado para auxiliar o leiturista na execução da leitura dos medidores com ponteiros.
        Clique no botão abaixo para começar a leitura e acessar o painel de medidores.
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 30,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;