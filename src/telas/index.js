import React from 'react';

import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Topo from '../componentes/Topo';

import Basilica from '../../assets/basilica.jpg'
import Bosque from '../../assets/bosque.jpg'
import CasaOnzeJanelas from '../../assets/casa-onze-janelas.jpg'
import VerRio from '../../assets/ver-o-rio.jpg'
import Estacao from '../../assets/estacao.jpg'
import Forte from '../../assets/forte.jpg'
import Mangal from '../../assets/mangal.jpg'
import VerOPeso from '../../assets/ver-o-peso.jpg'
import Museu from '../../assets/museu.jpg'
import Palacete from '../../assets/palecete-bolonha.jpg'
import ParqueResidencia from '../../assets/parque-residencia.jpg'
import Utinga from '../../assets/utinga.jpg'
import PraçaBatista from '../../assets/praça-batista.jpg'
import PraçaRepublica from '../../assets/praça-republica.jpg'
import PortoFuturo from '../../assets/porto-futuro.jpg'
import SaoJoseLiberto from '../../assets/sao-jose-liberto.jpeg'
import Teatro from '../../assets/teatro-da-paz.jpg'

export default function TelaPrincipal({ navigation }) {
    return <>
        <ScrollView>
            <Topo />     

            <View style={estilos.design}>

                <Text style = {estilos.descricao}>Seja bem-vindo ao Visita Belém, 
                o seu guia turístico da metrópole da Amazônia!</Text>

                <Text style = {estilos.texto2}>Pontos Turísticos</Text>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Basílica de Nazaré')}>
                    <Image source={Basilica} style={estilos.fotoBotao}/>    
                    <Text style={estilos.textoBotao}>BASÍLICA DE NAZARÉ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Bosque Rodrigues Alves')}>
                    <Image source={Bosque} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>BOSQUE RODRIGUES ALVES</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Casa das Onze Janelas')}>
                    <Image source={CasaOnzeJanelas} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>CASA DAS ONZE JANELAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Complexo Ver-o-Rio')}>
                    <Image source={VerRio} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>COMPLEXO VER-O-RIO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Estação das Docas')}>
                    <Image source={Estacao} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>ESTAÇÃO DAS DOCAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Forte do Presépio')}>
                    <Image source={Forte} style={estilos.fotoBotao}/>   
                    <Text style={estilos.textoBotao}>FORTE DO PRESÉPIO</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Mangal das Garças')}>
                    <Image source={Mangal} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>MANGAL DAS GARÇAS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Mercado Ver-o-Peso')}>
                    <Image source={VerOPeso} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>MERCADO VER-O-PESO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Museu Emílio Goeldi')}>
                    <Image source={Museu} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>MUSEU EMÍLIO GOELDI</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Palacete Bolonha')}>
                    <Image source={Palacete} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>PALACETE BOLONHA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Parque da Residência')}>
                    <Image source={ParqueResidencia} style={estilos.fotoBotao}/>   
                    <Text style={estilos.textoBotao}>PARQUE DA RESIDÊNCIA</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Parque do Utinga')}>
                    <Image source={Utinga} style={estilos.fotoBotao}/>   
                    <Text style={estilos.textoBotao}>PARQUE DO UTINGA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Porto Futuro')}>
                    <Image source={PortoFuturo} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>PORTO FUTURO</Text>
                </TouchableOpacity>             
                
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Praça Batista Campos')}>
                    <Image source={PraçaBatista} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>PRAÇA BATISTA CAMPOS</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Praça da República')}>
                    <Image source={PraçaRepublica} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>PRAÇA DA REPÚBLICA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('São José Liberto')}>
                    <Image source={SaoJoseLiberto} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>SÃO JOSÉ LIBERTO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Teatro da Paz')}>
                    <Image source={Teatro} style={estilos.fotoBotao}/>
                    <Text style={estilos.textoBotao}>TEATRO DA PAZ</Text>
                </TouchableOpacity>

                <Text style = {estilos.rodape}>© 2022 - H Tavares</Text>

            </View>

        </ScrollView>
    </>
}

const estilos = StyleSheet.create({
    design: {
        paddingVertical: 8,
        paddingHorizontal: 16,
      },

    fotoBotao: {
        height: '170%',
        width: '18%',
        marginHorizontal: 16,
        borderRadius: 6,
        
    },
    descricao: {
        color: "#000000",
        fontSize: 18,
        lineHeight: 26, 
        textAlign: "justify",
        paddingBottom: 30, 
    },
    texto2: {
        width: "100%",
        textAlign: "center",
        fontSize: 28,
        lineHeight: 22,
        color: "#006400",
        fontWeight: "bold",
        padding: 6,
        borderBottomWidth: 1,
        },
    rodape: {
        color: "#000000",
        fontSize: 14,
        lineHeight: 26, 
        paddingTop: 20,
        textAlign: 'center', 
        },
    botao: {
        marginTop: 16,
        backgroundColor: "#006400",
        paddingVertical: 16,
        borderRadius: 6,
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        
    },
    textoBotao: {
        alignItems: "center",
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },

})