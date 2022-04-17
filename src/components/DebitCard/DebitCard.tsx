import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image, TouchableOpacity} from 'react-native';
import { styles } from './style';



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
        <View style={styles.container}>
                <TouchableOpacity onPress={()=>handleOnpress(pressed)} 
                style={styles.touchable}>
                <Image source={!pressed ? require('../../../assets/Eye/eye.png'):
                require('../../../assets/Eye/eyeOpen.png') }
            style={styles.image}/>
                <Text style={{color:'#01D167'}}>{!pressed?'Hide':'Show' } card number</Text></TouchableOpacity>
               
            
            <Image source={require('../../../assets/Logo/Logo1.png')}
             style={styles.image2}/>
             <Text style={styles.logo}>aspire</Text>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.cardNum}>{cardNumber}</Text>
                    <View style={styles.container2}
                    ><Text style={styles.validity}>Thru: {user.validity}</Text>
                    <Text style={styles.cvv}>CVV: {cvv}</Text></View>
                    
                    <Text style={styles.visaLogo}>VISA</Text>
        </View>
    )
}