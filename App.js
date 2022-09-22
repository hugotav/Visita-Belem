import React from 'react';

import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import TelaPrincipal from './src/telas';

import BasilicaClasse from './src/pontos/basilica';
import BosqueClasse from './src/pontos/bosque';
import CasaClasse from './src/pontos/casa';
import ComplexoVerClasse from './src/pontos/complexoVer';
import EstacaoClasse from './src/pontos/estacao';
import ForteClasse from './src/pontos/forte';
import MangalClasse from './src/pontos/mangal';
import MercadoClasse from './src/pontos/mercadoVer';
import MuseuClasse from './src/pontos/museu';
import PalaceteClasse from './src/pontos/palacete';
import ParqueClasse from './src/pontos/parque';
import ParqueUtingaClasse from './src/pontos/parqueUtinga';
import PraçaBClasse from './src/pontos/praçaBatista';
import PraçaRClasse from './src/pontos/praçaRepublica';
import PortoClasse from './src/pontos/portoFuturo';
import SaoJoseClasse from './src/pontos/saoJose';
import TeatroClasse from './src/pontos/teatro';


export default function App() {

  return <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrincipal">
      <Stack.Screen name=" " component={TelaPrincipal} />
      <Stack.Screen name="Basílica de Nazaré" component={BasilicaClasse} />
      <Stack.Screen name="Bosque Rodrigues Alves" component={BosqueClasse} />
      <Stack.Screen name="Casa das Onze Janelas" component={CasaClasse} />
      <Stack.Screen name="Complexo Ver-o-Rio" component={ComplexoVerClasse} />
      <Stack.Screen name="Estação das Docas" component={EstacaoClasse} />
      <Stack.Screen name="Forte do Presépio" component={ForteClasse} />
      <Stack.Screen name="Mangal das Garças" component={MangalClasse} />
      <Stack.Screen name="Mercado Ver-o-Peso" component={MercadoClasse} />
      <Stack.Screen name="Museu Emílio Goeldi" component={MuseuClasse} />
      <Stack.Screen name="Palacete Bolonha" component={PalaceteClasse} />
      <Stack.Screen name="Parque da Residência" component={ParqueClasse} />
      <Stack.Screen name="Parque do Utinga" component={ParqueUtingaClasse} />
      <Stack.Screen name="Praça Batista Campos" component={PraçaBClasse} />
      <Stack.Screen name="Praça da República" component={PraçaRClasse} />
      <Stack.Screen name="Porto Futuro" component={PortoClasse} />
      <Stack.Screen name="São José Liberto" component={SaoJoseClasse} />
      <Stack.Screen name="Teatro da Paz" component={TeatroClasse} />
      </Stack.Navigator>
    </NavigationContainer>  
  
  </>
             
};