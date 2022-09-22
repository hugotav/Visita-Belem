import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Mangal from './../../assets/mangal.jpg';

const width = Dimensions.get('screen').width;

export default function MangalClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Mangal} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Mangal das Garças, inaugurado em 12 de janeiro de 
            2005, está localizado às margens do rio Guamá, em pleno centro histórico de Belém do 
            Pará, no entorno do Arsenal da Marinha. O parque ecológico é resultado da revitalização 
            de uma área de 40.000 m², uma síntese do ambiente amazônico no coração da capital 
            paraense. O local possui: o Museu Amazônico da Navegação, Manjar das Garças, um dos 
            melhores restaurantes da capital, Viveiro das Aningas ou Viveiro dos Pássaros, onde o 
            visitante tem contato direto com uma impressionante quantidade de pássaros, O Farol de 
            Belém, com 47 metros de altura, o Borboletário (Reserva José Márcio Ayres), numa área 
            de 1.400 m², o ambiente é o primeiro do gênero da região Norte, sendo apontado como um dos
            maiores do Brasil, Orquidiário, e Armazém do Tempo, onde os visitantes podem 
            comprar plantas, artesanato, livros e CDs de artistas paraenses e é possível saborear 
            no local um requintado serviço de café.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Terça a domingo, das 08h às 18h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>R. Carneiro da Rocha, s/n - Cidade Velha, Belém - PA, 66020-160.</Text>

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