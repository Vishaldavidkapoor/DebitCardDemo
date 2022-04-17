
import React, { useEffect, useState } from 'react';
import {Text, View,Dimensions,TouchableOpacity,Image,TextInput } from 'react-native';


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
        <View style={{flex:1,backgroundColor:'#0C365A'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}  >
                <Image style={{height:20,width:20,left:20,marginTop:30}} 
                source={require('../../../assets/back/back.png')}/>
            </TouchableOpacity>
            <Image style={{height:25,width:25, left:360,top:-25}} source={require('../../../assets/Logo/Logo.png')} />
            <Text style={{left:20,top:50,color:'white',fontSize:25,fontWeight:'bold'}}>Spending limit</Text>
            <View style={{top:90, flexDirection:'column',
            backgroundColor:'white',height:'90%',borderTopLeftRadius:30,borderTopRightRadius:30}}>
              <View style={{flexDirection:'row', left:20,top:20}}>
                  <Image  style={{height:20,width:20,}} 
                source={require('../../../assets/Logo/Logo.png')}/>
                <Text style={{left:10,fontWeight:'bold'}}>Set a weekly debit card spending limit</Text></View>
                <View style={{height:25,width:40,backgroundColor:'#20D167',
            top:50,left:20,alignItems:'center'}}>
                    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>S$</Text></View>
                    <TextInput
        style={{ height: 40,
            // margin: 12,
            // borderWidth: 1,
            paddingLeft:50,
            fontSize:20,
            fontWeight:'bold',
            marginHorizontal:20,
            borderBottomWidth: 1,
            borderColor:'#E5E5E5',
            padding: 10,
             top:20}}
        onChangeText={(text)=>formatNumber(text)}
        onSubmitEditing={()=>alert(spendLimit)}
         value={spendLimit}
      />
               
        <Text style={{top:30,left:20,color:'#22222266',}}>Here weekly means the last 7 days - not the calendar week</Text>
        <View style={{ top:70, flexDirection:"row", justifyContent:'space-around'}}>
          {
              sampleAmount.map((item)=>{
                  return(
                      <TouchableOpacity style={{height:40, justifyContent:'center',alignItems:'center', 
                      backgroundColor:'#e4f5e8', width:100}}
                      onPress={()=>setSpendLimit(item)}>
                          <Text style={{color:'#20D167',fontSize:15,fontWeight:'bold'}}>S$ {item}</Text>
                      </TouchableOpacity>
                  )
              })
          }</View>
           
           </View></View>

   
        
         
    )
}