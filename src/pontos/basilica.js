import React from "react";
import { Image, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'; 

import Basilica from './../../assets/basilica.jpg';

const width = Dimensions.get('screen').width;

export default function BasilicaClasse({ navigation }) {

    return <> 

        <ScrollView>

        <View style={estilos.design}>
            <Image source={Basilica} style={estilos.foto}/>

            <Text style={estilos.textoSobre}>Sobre:</Text>
            
            <Text style={estilos.textoPagina}>A Basílica Santuário Nossa Senhora de Nazaré é uma das igrejas
             mais belas de Belém, apresenta o estilo neoclássico e abriga uma grande quantidade de mármore. 
             Hoje, quem vem no segundo domingo de Outubro para o Círio de Nazaré vê milhares de fiéis, 
             turistas e romeiros de todas as partes do Brasil e do mundo prestigiando a festividade do Círio
              de Nazaré. A procissão do Círio começa na Catedral de Belém e acaba na Basílica. O Círio 
              de Nazaré é a maior procissão católica do mundo, com um número de dois milhões de acompanhantes
               de todas as procissões durante todo o ano. Quem vem a Belém e é católico não pode deixar de visitar
                essa igreja. Hoje a Basílica é um dos principais patrimônios históricos de Belém. Em sua 
                fachada, apresenta duas inscrições em latim. A inscrição superior Deiparae Virgini a Nazareth 
                significa "Virgem de Nazaré Mãe de Deus", e a inscrição inferior Salve Regina Mater 
                Misericordiae significa "Salve Rainha Mãe de Misericórdia".</Text>

             <Text style={estilos.textoFunc}>Funcionamento:</Text>

             <Text style={estilos.textoPagina}>Segunda a sexta-feira, 
             das 06h às 20h. Sábado e domingo, das 06h às 12h e das 15h às 21h.</Text>

             <Text style={estilos.textoEnd}>Endereço:</Text>

             <Text style={estilos.textoPagina}>Av. Nª Sra. de Nazaré, 1300 - Nazaré, Belém - PA, 66035-145.</Text>

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