import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Forte from './../../assets/forte.jpg';

const width = Dimensions.get('screen').width;

export default function ForteClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Forte} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>O Forte do Castelo do Senhor Santo Cristo do Presépio de 
            Belém, popularmente referido como Forte do Castelo ou Forte do Presépio, é uma fortificação 
            portuguesa localizado à baía do Guajará, na ponta de Maúri à margem direita da foz do rio Guamá,
             marco da fundação da cidade brasileira de Belém. A edificação faz parte do conjunto 
             arquitetônico e paisagístico denominado Feliz Lusitânia, núcleo histórico inicial da 
             cidade de Belém do Pará (capital do Estado do Grão-Pará na época do Brasil Colônia). 
             Após ser arsenal de guerra, hospital e círculo militar, agora constituindo-se em um 
             ponto turístico da cidade, por sua localização privilegiada e seu sentido histórico. 
             Desde 1962 é tombado como patrimônio histórico pelo Iphan (Instituto do Patrimônio 
             Histórico e Artístico Nacional).</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Terça a domingo, das 09h às 17h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Praça Dom Frei Caetano Brandão, s/n - Cidade Velha, Belém - PA, 66020-600.</Text>

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