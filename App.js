import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PainelDeMedidores from './src/screens/PainelDeMedidores';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home"
            component={HomeScreen}
            options={{ title: 'Bem-vindo ao simulador de medidores' }}
          />
          <Stack.Screen
            name="PainelDeMedidores"
            component={PainelDeMedidores}
            options={{ title: 'Painel de Medidores' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
