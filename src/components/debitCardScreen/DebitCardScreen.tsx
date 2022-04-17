import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import DebitCard from '../DebitCard/DebitCard';
import DetailsScreen from '../DetailsScreen/DetailsScreen';


const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;


export default function DebitCardScreen({navigation}) {


    return(
        <View style={{flex:1,backgroundColor:'#0C365A'}}>
            <View style={{flex:1,flexDirection:'column'}}>
             <Image source={require('../../../assets/Logo/Logo.png')} 
              style={{height:25,width:25, top:20, left:360}} />
            <Text  style={{ color:'white'
        ,fontSize:25, top:5,left:20, fontWeight:'bold'}}>Debit Card</Text>
       
        <Text style={{ color:'white',fontSize:15, top:20,left:20,}}>Available balance</Text>
        <View style={{height:22,width:40,backgroundColor:'#01D167',top:35,left:20,
        alignItems:'center',justifyContent:'center', borderRadius:5}}>
            <Text style={{color:'white',fontWeight:'bold'}}>S$</Text>
            </View>         
   
            <View>
                <Text style={{color:'white',fontWeight:'bold',top:5,left:70,fontSize:27}}>3,000</Text>
            </View>
        <DebitCard/>
        <DetailsScreen navigation={navigation}/>
        </View></View>

        
    )

}

