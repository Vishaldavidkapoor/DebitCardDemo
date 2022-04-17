import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image, TouchableOpacity} from 'react-native';

const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;


const user={
    name: 'Mark Henry',
    cardNumber:'5647 3411 2413 2020',
    cvv:456,
    validity:'12/20'
}

export default function DebitCard(){

    let [cardNumber,setCardNumber]=useState(user.cardNumber);
    let [cvv,setCvv]= useState<any>(user.cvv);
    let [pressed,setPressed]=useState(false)

const handleOnpress=(pressed) =>{
    setPressed(!pressed)
    if(!pressed)
    {setCardNumber('**** **** **** 2020');
    setCvv('***');}
    else
    {setCardNumber('5647 3411 2413 2020');
    setCvv(456);}
    // setCvv()

}
    return(
        <View style={{height:screenHeight*0.32, width:screenWidth*0.85, left:30,
             top:screenHeight*0.24, 
        backgroundColor:'#01D167',  position: 'absolute', borderRadius:15,
        zIndex: 1,}}>
                <TouchableOpacity onPress={()=>handleOnpress(pressed)} 
                style={{backgroundColor:'white', 
            height:30,left:200, width:150,top:-26, flexDirection:'row',alignItems:'center',
            justifyContent:'center',borderTopLeftRadius:5,borderTopRightRadius:5}}>
                <Image source={!pressed ? require('../../../assets/Eye/eye.png'):
                require('../../../assets/Eye/eyeOpen.png') }
            style={{height:20,width:20}}/>
                <Text style={{color:'#01D167'}}>{!pressed?'Hide':'Show' } card number</Text></TouchableOpacity>
               
            
            <Image source={require('../../../assets/Logo/Logo1.png')}
             style={{height:20,width:20,left:250,backgroundColor:'white'}}/>
             <Text style={{
                    fontSize:20, color:'white',left:275, fontWeight:'bold',top:-20}}>aspire</Text>
                <Text style={{marginHorizontal:20,
                    fontSize:25, color:'white', fontWeight:'bold'}}>{user.name}</Text>
                <Text style={{marginHorizontal:20,
                    fontSize:20, color:'white',top:10}}>{cardNumber}</Text>
                    <View style={{flexDirection:'row',top:10, justifyContent:'flex-start'}}
                    ><Text style={{marginHorizontal:20,marginVertical:10,
                    fontSize:15, color:'white'}}>Thru: {user.validity}</Text>
                    <Text style={{marginVertical:10,
                    fontSize:15, color:'white'}}>CVV: {cvv}</Text></View>
                    
                    <Text style={{
                    fontSize:25,left:270, color:'white',fontWeight:'bold',top:-20}}>VISA</Text>
        </View>
    )
}