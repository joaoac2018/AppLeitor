import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Text as SvgText, G } from 'react-native-svg';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const MedidorAnalogico = ({sentidoHorario = true, direcaoSeta = '→' }) => {
  const raio = 80;
  const centro = 120;
  const ponteiroComprimento = 80;
  const [angulo, setAngulo] = useState(0);

  const calcularAngulo = (x, y) => {
    const dx = x - centro;
    const dy = y - centro;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return (deg + 360) % 360;
  };

  const calcularLeitura = (anguloAtual, sentidoHorario) => {
    const anguloCorrigido = (anguloAtual + 90) % 360;
    let faixa = Math.floor(anguloCorrigido / 36);
    if (!sentidoHorario) {
      faixa = (10 - faixa -1) % 10;
    }
    return faixa;
  };

  const gesture = Gesture.Pan().onUpdate((e) => {
    const { x, y } = e;
    const novoAngulo = calcularAngulo(x, y);
    setAngulo(novoAngulo);
  });

  const gerarNumeros = () => {
    const numeros = [];
    const raioNumeros = raio - 10;

    for (let i = 0; i < 10; i++) {
      const direcao = sentidoHorario ? 1 : -1;
      const anguloNum = (i * 36 * direcao - 90) * (Math.PI / 180);

      const x = centro + raioNumeros * Math.cos(anguloNum);
      const y = centro + raioNumeros * Math.sin(anguloNum);
      numeros.push(
        <SvgText
          key={i}
          x={x}
          y={y}
          fontSize="16"
          fill="black"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {i}
        </SvgText>
      );
    }
    return numeros;
  };

  const rad = angulo * (Math.PI / 180);
  const x2 = centro + ponteiroComprimento * Math.cos(rad);
  const y2 = centro + ponteiroComprimento * Math.sin(rad);


  return (
    <View style={styles.medidor}>
      <GestureDetector gesture={gesture}>
        <Svg height="240" width="240">
          <G>
            <Circle
              cx={centro}
              cy={centro}
              r={raio}
              stroke="black"
              strokeWidth="3"
              fill="white"
            />
            {gerarNumeros()}
            <Line
              x1={centro}
              y1={centro}
              x2={x2}
              y2={y2}
              stroke="#408156"
              strokeWidth="3"
            />
          </G>
        </Svg>
      </GestureDetector>
      <Text style={styles.leitura}>
        Leitura: {calcularLeitura(Math.round(angulo), sentidoHorario)}
      </Text>
      <Text style={styles.seta}>{direcaoSeta}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  medidor: {
    width: 180,
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    height: 300,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius:4,
  },
  leitura: {
    fontSize: 20,
    marginTop: -20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  seta: {
  fontSize: 50,
  marginTop: -25,
  textAlign: 'center',
  color: '#4caf50',
},
});

export default MedidorAnalogico;