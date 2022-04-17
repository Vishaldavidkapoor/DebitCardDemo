import { StyleSheet,Dimensions } from "react-native";

const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

export const styles= StyleSheet.create({
    container:{
        top:90,
         backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30,
    },
    image:{
        height:30, width:30,left:15,top:30
    },
    text:{
        left:55, color:'grey'
    },
    switch:{
        left:360,top:35,position:'absolute'
    },

})