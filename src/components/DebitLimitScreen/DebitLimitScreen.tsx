
import React, { useEffect, useState } from 'react';
import {Text, View,Dimensions,TouchableOpacity,Image,TextInput } from 'react-native';
import { styles } from './style';


const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

const sampleAmount=["5000","10,000","20,000"];

export default function DebitLimitScreen({navigation}) {

    let [spendLimit,setSpendLimit]=useState('');
    let [value,setValue]=useState('');

 const formatNumber = inputNumber => {
        let formetedNumber=(Number(inputNumber)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        let splitArray=formetedNumber.split('.');
        if(splitArray.length>1){
          formetedNumber=splitArray[0];
        }
       setSpendLimit(formetedNumber);
      };


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}  >
                <Image style={styles.image} 
                source={require('../../../assets/back/back.png')}/>
            </TouchableOpacity>
            <Image style={styles.image2} source={require('../../../assets/Logo/Logo.png')} />
            <Text style={styles.spendLim}>Spending limit</Text>
            <View style={styles.container2}>
              <View style={styles.container3}>
                  <Image  style={styles.image3} 
                source={require('../../../assets/Meter/Meter.png')}/>
                <Text style={styles.text}>Set a weekly debit card spending limit</Text></View>
                <View style={styles.container4}>
                    <Text style={styles.dollar}>S$</Text></View>
                    <TextInput
        style={styles.input}
        onChangeText={(text)=>formatNumber(text)}
        onSubmitEditing={()=>alert(spendLimit)}
         value={spendLimit}
      />
               
        <Text style={styles.text2}>Here weekly means the last 7 days - not the calendar week</Text>
        <View style={styles.container5}>
          {
              sampleAmount.map((item)=>{
                  return(
                      <TouchableOpacity style={styles.touch}
                      onPress={()=>setSpendLimit(item)}>
                          <Text style={styles.dollar1}>S$ {item}</Text>
                      </TouchableOpacity>
                  )
              })
          }</View>
           
           </View></View>

   
        
         
    )
}