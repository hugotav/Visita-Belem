import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Parque from './../../assets/parque-residencia.jpg';

const width = Dimensions.get('screen').width;

export default function ParqueClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Parque} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Parque da Residência é um delicioso suspiro em meio
             à cidade de Belém. O espaço mistura uma gostosa área verde a atividades culturais e 
             convida a um passeio relaxante, seja por 10 minutos ou por algumas horas. Marcado por
              um grande casarão histórico que servia de residência para os governadores do Pará, o
               Parque da Residência oferece diversos espaços para curtir o dia. No local, há um 
               lindo orquidário, um coreto convidativo, o restaurante Aviú do Parque — que serve
                bem para um almoço ou café —, além de um antigo vagão de trem. A parte cultural 
                fica por conta de um bom anfiteatro ao ar livre e do Teatro Estação Gasômetro, 
                amplo espaço dedicado a apresentações de música, dança e teatro. O teatro, com 
                400 lugares, funciona nas antigas instalações da Companhia de Gás do Pará. Vale 
                conferir a agenda cultural de Belém para aproveitar as apresentações.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Terça a domingo, das 09h às 17h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Av. Gov Magalhães Barata, 830 - São Brás, Belém - PA, 66063-240.</Text>

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