import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Estacao from './../../assets/estacao.jpg';

const width = Dimensions.get('screen').width;

export default function EstacaoClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Estacao} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>A Estação das Docas (inicialmente Porto de Belém, 
            edificado em 1850) é um complexo turístico e cultural, inaugurado em 13 de maio de 2000. 
            O complexo congrega diversos aspectos, entre eles: gastronomia, cultura, moda e eventos. 
            São 32 mil m² divididos em três armazéns e um terminal de passageiros, uma janela para Baía 
            do Guajará e a ilha das onças.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>

            <Text style={estilos.textoPagina}>Segunda e terça-feira, das 10h às 00h. Quarta-feira, das 10h à 01h. De quinta a sábado, das 10h às 02h. Domingo, das 9h às 00h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>

            <Text style={estilos.textoPagina}>Av. Mal. Hermes, S/N - Campina, Belém - PA, 66010-020.</Text>

            <Text style = {estilos.rodape}>© 2022 - H Tavares</Text>

        
        </View> 

        </ScrollView> 
        
          
    </>
    
}

const estilos = StyleSheet.create({
    design: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16, 
        borderRadius: 6,
        //borderWidth: 10,
        //borderColor: '#006400', 
        elevation: 12,
      },
    foto: {
        width: "95%",
        height: 378 / 568 * width,
        resizeMode: "contain",
        alignSelf: "center",
        borderRadius: 6,
        
    },
    textoSobre: {
        fontSize: 20,
        //lineHeight: 26,
        paddingTop: 16,
        paddingBottom: 16,
        marginLeft: 11,
        color: "#464646",
        fontWeight: "bold",
    },
    textoFunc: {
        fontSize: 20,
        //lineHeight: 26,
        paddingTop: 16,
        paddingBottom: 16,
        marginLeft: 11,
        color: "#464646",
        fontWeight: "bold",
    },
    textoEnd: {
        fontSize: 20,
        //lineHeight: 26,
        paddingTop: 16,
        paddingBottom: 16,
        marginLeft: 11,
        color: "#464646",
        fontWeight: "bold",
    },
    textoPagina: {
        color: "#000000",
        fontSize: 18,
        lineHeight: 26, 
        textAlign: "justify",
        marginHorizontal: 11,
    },
    rodape: {
        color: "#000000",
        fontSize: 14,
        lineHeight: 26, 
        paddingTop: 20,
        textAlign: 'center', 
        },
})