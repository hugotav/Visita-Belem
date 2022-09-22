import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Teatro from './../../assets/teatro-da-paz.jpg';

const width = Dimensions.get('screen').width;

export default function TeatroClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Teatro} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Theatro da Paz (inicialmente chamado Nossa 
            Senhora da Paz) é um teatro brasileiro localizado na Praça da República na cidade 
            paraense de Belém, projetado pelo engenheiro pernambucano José Tibúrcio Pereira 
            Magalhães no estilo neoclássico e inaugurado em 1878, no período áureo da exploração 
            da borracha na Amazônia. Considerado um teatro-monumento e patrimônio histórico segundo
             o IPHAN, e também é o primeiro teatro de ópera da Amazônia, e um dos primeiros teatros
              líricos do Brasil.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Terça, quinta e sexta às 09h – 10h / 11h – 12h / 14h – 15h / 16h – 17h ; Sábado às 09h – 10h / 11h – 12h ; Domingo às 09h – 10h / 11h - 12h; Quarta-feira a visitação é gratuita.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Av. Pres. Vargas, S/N - Campina, Belém - PA, 66017-060</Text>

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