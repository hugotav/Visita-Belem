import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'; 

import topo from './../../assets/belemTopo.jpg';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

export default function Topo({ titulo }) {
    return <>

        <Text style ={estilos.titulo}>Visita Belém</Text>
        <Image source={topo} style={estilos.topo} />
        
    </>
    
}

const estilos = StyleSheet.create ({
    caixa: {
        width: "100%",
        height: "25%",
    },
        
    topo: {
        width: "100%",
        height: 378 / 568 * largura,
        //resizeMode: "contain",
    },

    titulo: {
        width: "100%",
        //position: "absolute", 
        textAlign: "center",
        fontSize: 32,
        //lineHeight: 26,
        color: "#006400",
        fontWeight: "bold",
        padding: 6,
        backgroundColor: 'white',
    },


})