import { StyleSheet,Dimensions } from "react-native";

const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

export const styles= StyleSheet.create({
    container:{
        flex:1,backgroundColor:'#0C365A'
    },
    container2:{
        flex:1,flexDirection:'column'
    },
    image:{
        height:25,width:25, top:20, left:360
    },
    debit:{
        color:'white'
        ,fontSize:25, top:5,left:20, fontWeight:'bold'
    },
    bal:{
        color:'white',fontSize:15, top:20,left:20,
    },
    container3:{
        height:22,width:40,backgroundColor:'#01D167',top:35,left:20,
        alignItems:'center',justifyContent:'center', borderRadius:5
    },
    dollar:{
        color:'white',fontWeight:'bold'
    },
    amount:{
        color:'white',fontWeight:'bold',top:5,left:70,fontSize:27
    }
})