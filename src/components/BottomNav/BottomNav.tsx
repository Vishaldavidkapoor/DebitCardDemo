
import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions,Image, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from './style';

const navOptions=['Home','Debit Card','Payments', 'Credit','Profile'];

export default function BottomNav(){
    return(
        <View style={styles.container}>
         {
             navOptions.map((item,i)=>{
                 return(<View><TouchableOpacity 
                 onPress={()=>alert('Pressed')} style={{alignItems:'center'}}>
                      <Image source={i==0? require('../../../assets/NavIcons/Home.png'): 
                 i==1?
                 require('../../../assets/NavIcons/pay.png'):i==2?
                 require('../../../assets/NavIcons/Payments.png'): i==3?
                 require('../../../assets/NavIcons/Credit.png'):
                 require('../../../assets/NavIcons/Account.png') }
                 style={styles.image}/>
                     <Text style={i==1?{color:'#01D167'}:{color:'grey'}}>{item}</Text>
                </TouchableOpacity></View> 
                 )
             })
         }
        </View>
    )
}