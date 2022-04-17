import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Switch,Text, View,Dimensions,Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './style';

const options = [
    {
       title: 'Top-up acoount',
       detail: 'Deposit money to your account to use with card',
       toggle: false
    },
    {
        title: 'Weekly spending limit',
        detail: 'You haven’t set any spending limit on card',
        toggle: true
     },
     {
        title: 'Freeze Card',
        detail: 'Your debit card is currently active',
        toggle: true
     },
     {
        title: 'Get a new card',
        detail: 'This deactivates your current debit card',
        toggle: false
     },
     {
        title: 'Deactivated cards',
        detail: 'Your previously deactivated cards',
        toggle: false
     },
   ]

export default function DetailsScreen({navigation}) {

    let [isEnabled,setIsEnabled]=useState(false);

    const toggleSwitch=()=>{
        setIsEnabled(!isEnabled);
    }

    return(
        <ScrollView style={{...styles.container,marginBottom:90}}>
           
            <View style={{height:140}}>

            </View>
         { options.map((u,i)=> {
             return (
                <View style={{flexDirection:'column'}} >
                <TouchableOpacity onPress={()=>i==1&& navigation.push('DebitLimitScreen')}>
                <Image  style={styles.image}
                 source={i==0? require('../../../assets/insight/insight.png'): 
                 i==1?
                  require('../../../assets/Transfer/Transfer.png'):i==2?
                  require('../../../assets/Freeze/Transfer.png'): i==3?
                   require('../../../assets/Block/Transfer.png'):
                   require('../../../assets/NewCard/Transfer.png')} />
            <Text style={{left:55}}>{u.title}</Text>
            <Text style={styles.text}>{u.detail}</Text>
            {u.toggle &&
                  <Switch
                  trackColor={{ false: "#767577", true: "#01D167" }}
                  thumbColor={ "#f4f3f4"}
                  onValueChange={ toggleSwitch}
                  value={isEnabled}
                  style={styles.switch}
                />
            }
            </TouchableOpacity>
            </View>  
         );}
         )
            }
         
         
        </ScrollView>
    )
}