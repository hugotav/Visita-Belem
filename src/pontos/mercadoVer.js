import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import MercadoVer from './../../assets/ver-o-peso.jpg';

const width = Dimensions.get('screen').width;

export default function MercadoClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={MercadoVer} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Mercado Ver-o-Peso, ou Mercado Municipal Bolonha de 
            Peixe, ou Mercado de Ferro, é um mercado público brasileiro, inaugurado em 1901, pertencente ao Complexo do 
            Ver-o-Peso (1625), situado na cidade paraense de Belém, às margens da baía do Guajará. 
            É considerado um dos mercados públicos mais antigos do País, uma das maravilhas do estado, 
            sendo eleito uma das 7 Maravilhas do Brasil. Ponto turístico, cultural e econômico da 
            cidade de Belém, formado pelo Mercado de Ferro, Praça do Pescador, Doca das Embarcações, 
            Pedra do Peixe e feira-livre (considerado a maior feira aberta da América Latina), que
            abastece a cidade com variados tipos de gêneros alimentícios e ervas medicinais, vindos 
            das ilhas circunvizinhas à capital e dos municípios do interior, fornecidos por via 
            fluvial.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>

            <Text style={estilos.textoPagina}>Segunda a sábado, das 05h às 18h30.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>

            <Text style={estilos.textoPagina}>Blvd. Castilhos França - Campina, Belém - PA, 66013-030.</Text>

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