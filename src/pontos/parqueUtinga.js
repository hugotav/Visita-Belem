import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Utinga from './../../assets/utinga.jpg';

const width = Dimensions.get('screen').width;

export default function ParqueUtingaClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Utinga} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Parque Estadual do Utinga é uma unidade de 
            conservação estadual criada com o objetivo de preservar ecossistemas naturais de 
            grande relevância ecológica e beleza cênica, estimular a realização de pesquisas 
            científicas e, além disso, incentivar o desenvolvimento de atividades de educação 
            ambiental, incluindo o turismo ecológico. Localizado no coração da Região Metropolitana
             de Belém, o Parque Estadual do Utinga é a unidade-símbolo da 
             diversidade biológica presente na Região Amazônica. O parque ambiental chama a atenção
              por sua ampla e peculiar biodiversidade.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Quarta a segunda-feira, das 06h às 17h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Av. João Paulo II, S/N - Curió Utinga, Belém - PA, 66610-770.</Text>

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