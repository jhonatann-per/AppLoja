import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer'

export default function Detail({navigation}) {

    navigation.setOptions({
        headerTitle: 'Detalhes'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
            source={require('../../assets/detail.png')}
            style={styles.image}
            resizeMode="cover"
            />

            <View>

                <View>
                    <Text style={[styles.title, { fontSize:24 }]}>R$199,99</Text>
                </View>

                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize:30 }]}>Nike Air Max Dia</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color="#2379f4"/>
                    <Dot color="#fb6e53"/>
                    <Dot color="#ddd"/>
                    <Dot color="#000"/>
                </View>

                <View style={{flexDirection: 'row', width: '100%'}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <SizeButton bgColor="#17181a" color="#FFF">36</SizeButton>
                        <SizeButton>38</SizeButton>
                        <SizeButton>40</SizeButton>
                        <SizeButton>42</SizeButton>
                    </ScrollView>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike Downshifter 10
                    </Text>
                    <Text style={styles.textContent}>
                        O Tênis Nike Masculino Downshifter 10 traz amortecimento e suporte atualizados, para garantir uma corrida estável e confortável. Esse tênis de corrida é confeccionado em material respirável, cabedal em couro sintético, com mesh no calcanhar, proporciona suporte e circulação de ar, forro acolchoado, entressola em espuma de EVA flexível, garantindo a sensação de amortecimento responsivo durante o treino e solado em borracha para tração durável. O homem que busca resultados e estilo, conta com a Nike para acompanhar nos treinos e no dia a dia.
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: amortecimento
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Mesh
                    </Text>
                </View>

                <Button/>

                <View style={styles.line}
                
                ></View>

                <Footer/>

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#FFF'
    },
    image:{
        width:'100%'
    },
    title:{
        paddingHorizontal:'2%'
    },
    dotContainer:{
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent:{
        fontSize: 16,
        lineHeight:25,
        marginVertical:'2%',
        paddingHorizontal:'2%'
    },
    textTitle:{
        fontSize:23,
        marginVertical:'2%'
    },
    textList:{
        fontSize:16,
        lineHeight:25,
    },
    line:{
        borderWidth:1,
        borderBottomColor:'#DDD',
        marginVertical:'2%',
    }
});