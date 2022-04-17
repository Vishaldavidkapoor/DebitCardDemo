import { StyleSheet,Dimensions } from "react-native";

const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

export const styles= StyleSheet.create({
    container:{
        height:screenHeight*0.32, width:screenWidth*0.85, left:30,
             top:screenHeight*0.24, 
        backgroundColor:'#01D167',  position: 'absolute', borderRadius:15,
        zIndex: 1,
    },
    touchable:{
        backgroundColor:'white', 
            height:30,left:200, width:150,top:-26, flexDirection:'row',alignItems:'center',
            justifyContent:'center',borderTopLeftRadius:5,borderTopRightRadius:5
    },
    image:{height:20,width:20},
    image2:{height:20,width:20,left:250,backgroundColor:'white'},
    logo:{
        fontSize:20, color:'white',left:275, fontWeight:'bold',top:-20
    },
    name:{
        marginHorizontal:20,
                    fontSize:25, color:'white', fontWeight:'bold'
    },
    cardNum:{
        marginHorizontal:20,
                    fontSize:20, color:'white',top:10
    },
    cvv:{
        marginVertical:10,
        fontSize:15, color:'white'
    },
    container2:{
        flexDirection:'row',top:10, justifyContent:'flex-start'
    },
    validity:{
        marginHorizontal:20,marginVertical:10,
                    fontSize:15, color:'white'
    },
    visaLogo:{
        fontSize:25,left:270, color:'white',fontWeight:'bold',top:-20
    }
})