import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Palacete from './../../assets/palecete-bolonha.jpg';

const width = Dimensions.get('screen').width;

export default function PalaceteClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Palacete} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Palacete Bolonha é uma edificação e palacete de 1905, 
            idealizado durante o Ciclo da Borracha pelo arquiteto Francisco Bolonha como presente à esposa
            Lice Tem-Brink, localizada na cidade brasileira de Belém. Francisco Bolonha
            foi pai do arquiteto modernista Francisco de Paula Lemos Bolonha. O Palacete Bolonha 
            é um dos símbolos da Belle Époque de Belém, com seus vários estilos arquitetônicos. 
            O Palacete foi sinônimo de luxo e sofisticação no espaço urbano de Belém, um exemplar 
            do ecletismo, mesclando os estilos neoclássico, art nouveau, barroco e rococó. Possui cinco pavimentos, com térreo, salão,
            área social, banheiros e quartos, além da fachada que mede quase vinte metros de altura.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Segunda a sexta-feira, das 09h às 12h e das 14h às 17h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Av. Gov. José Malcher, 295 - Nazaré, Belém - PA, 66035-065.</Text>

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