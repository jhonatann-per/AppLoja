import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation} from '@react-navigation/native'

import Shoes from '../Shoes'

export default function Footer() {

const navigation = useNavigation();

 return (
   <View>
        <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
        <View style={{flexDirection:'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/1.png')} cost="199,99" onClick={()=> navigation.navigate('Detail')}>
                    Nike Air Max Dia
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/2.png')} cost="199,99" onClick={()=> navigation.navigate('Detail')}>
                    Nike Downshilfter 10
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/3.png')} cost="249,99">
                    Nike Joyride Run Flyknit
                    </Shoes>
                </View>
                <View style={{marginHorizontal:10}}>
                    <Shoes img={require('../../assets/4.png')} cost="299,99">
                    Nike Air Max Triax 96 SP Masculino
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/5.png')} cost="249,99">
                    Nike Air Max Tailwind IV Masculino
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10}}>
                    <Shoes img={require('../../assets/6.png')} cost="299,99">
                    Nike Revolution 5 Masculino 
                    </Shoes>
                </View>
            </ScrollView>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        marginVertical:'2%',
        paddingHorizontal:'2%',
    }
})