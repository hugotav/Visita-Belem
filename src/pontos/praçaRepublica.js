import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import PraçaRepublica from './../../assets/praça-republica.jpg';

const width = Dimensions.get('screen').width;

export default function PraçaRClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={PraçaRepublica} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>No início era o Largo da Campina, um imenso terreno 
            descampado que ficava entre o bairro da Campina e a estrada que levava à ermida de 
            Nossa Senhora de Nazaré. Depois, no século XVIII, lá foi construído um imenso armazém
             para se guardar pólvora, traçando-lhe o nome para Largo da Pólvora. Uma forca foi 
             erguida, mas não há registro de nenhum enforcamento. O que se sabe é que o espaço 
             era usado para sepultar, em cova rasa, escravos e pobres. Em homenagem ao imperador, 
             lhe deram o nome de Pedro II, mas continuava sendo um grande terreno descampado. 
             Em 1850, até plantaram algumas árvores, mas de forma desordenada. Com a inauguração 
             do Theatro da Paz, em 1878, houve uma urbanização, também modesta. Seu nome definitivo 
             veio com a troca de regime: ”Praça da República”.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Aberta 24h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Av. Pres. Vargas, 814 - Campina, Belém - PA, 66017-060.</Text>

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