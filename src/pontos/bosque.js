import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Bosque from './../../assets/bosque.jpg';

const width = Dimensions.get('screen').width;

export default function BosqueClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Bosque} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Jardim Botânico da Amazônia Bosque Rodrigues Alves 
            é uma área de preservação ambiental brasileira localizada no bairro Marco, Zona Leste 
            de Belém. O espaço, inaugurado em 1883 e inspirado nos amplos boulevards franceses, 
            como o Bois Bolonge, abriga mais de 80 mil espécies de flora e fauna
            e recebe, em média, 20 mil visitantes por mês.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Quarta a domingo, das 09h às 16h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Av. Alm. Barroso, 2305 - Marco, Belém - PA, 66093-034.</Text>

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