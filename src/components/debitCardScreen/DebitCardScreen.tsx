import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import BottomNav from '../BottomNav/BottomNav';
import DebitCard from '../DebitCard/DebitCard';
import DetailsScreen from '../DetailsScreen/DetailsScreen';
import { styles } from './style';


const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;


export default function DebitCardScreen({navigation}) {


    return(
        <View style={styles.container}>
            <View style={styles.container2}>
             <Image source={require('../../../assets/Logo/Logo.png')} 
              style={styles.image} />
            <Text  style={styles.debit}>Debit Card</Text>
       
        <Text style={styles.bal}>Available balance</Text>
        <View style={styles.container3}>
            <Text style={styles.dollar}>S$</Text>
            </View>         
   
            <View>
                <Text style={styles.amount}>3,000</Text>
            </View>
        <DebitCard/>
        <DetailsScreen navigation={navigation}/>
        <BottomNav/>
        </View></View>

        
    )

}

