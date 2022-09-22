import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import PraçaBatista from './../../assets/praça-batista.jpg';

const width = Dimensions.get('screen').width;

export default function PraçaBClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={PraçaBatista} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>A Praça Batista Campos localiza-se na cidade de Belém,
             no estado do Pará, no Brasil. No século XIX, o terreno pertencia a Maria Manoela de 
             Figueira e Salvaterra, sendo por isso conhecido como “Largo da Salvaterra”. Com a 
             morte da proprietária, as terras passaram a pertencer à Câmara Municipal de Belém, 
             passando a chamar-se “Praça Sergipe” em homenagem à nova província brasileira. Assim, 
             em 1897, durante o governo do intendente Antônio Lemos, a praça passou a homenagear 
             um dos principais personagens da Cabanagem: Cônego Batista Campos, morto em 1834. Na 
             época o terreno era um largo singelo com algumas mangueiras e um canteiro central. 
             Três anos depois, quando foi inaugurada em 14 de fevereiro de 1904, já era uma das 
             praças mais belas de Belém.</Text>

            <Text style={estilos.textoFunc}>Funcionamento:</Text>
            
            <Text style={estilos.textoPagina}>Aberta 24h.</Text>

            <Text style={estilos.textoEnd}>Endereço:</Text>
            
            <Text style={estilos.textoPagina}>Batista Campos, Belém - PA, 66025-230.</Text>

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