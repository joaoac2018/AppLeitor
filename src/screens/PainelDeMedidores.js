import React from 'react';
import { View, StyleSheet } from 'react-native';
import MedidorAnalogico from '../components/MedidorAnalogico';

const PainelDeMedidores = () => {
  return (
    <View style={styles.container}>
      <MedidorAnalogico sentidoHorario={false} direcaoSeta="→" />
      <MedidorAnalogico sentidoHorario={true} direcaoSeta="←" />
      <MedidorAnalogico sentidoHorario={false} direcaoSeta="→" />
      <MedidorAnalogico sentidoHorario={true} direcaoSeta="←" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    backgroundColor: '#fedc57',
  },
});

export default PainelDeMedidores;