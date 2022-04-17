import { StyleSheet,Dimensions } from "react-native";

const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height;

export const styles= StyleSheet.create({
    container:{
        flex:1,backgroundColor:'#0C365A'
    },
    image:{
        height:20,width:20,left:20,marginTop:30
    },
    image2:{
        height:25,width:25, left:360,top:-25
    },
    spendLim:{
        left:20,top:50,color:'white',fontSize:25,fontWeight:'bold'
    },
    container2:{
        top:90, flexDirection:'column',
            backgroundColor:'white',height:'90%',borderTopLeftRadius:30,borderTopRightRadius:30
    },
    container3:{
        flexDirection:'row', left:20,top:20
    },
    image3:{
        height:20,width:20,
    },
    text:{
        left:10,fontWeight:'bold'
    },
    container4:{
        height:25,width:40,backgroundColor:'#20D167',
            top:50,left:20,alignItems:'center'
    },
    dollar:{
        fontSize:15,color:'white',fontWeight:'bold'
    },
    input:{
        height: 40,
            paddingLeft:50,
            fontSize:20,
            fontWeight:'bold',
            marginHorizontal:20,
            borderBottomWidth: 1,
            borderColor:'#E5E5E5',
            padding: 10,
             top:20
    },
    text2:{
        top:30,left:20,color:'#22222266',
    },
    container5:{
        top:70, flexDirection:"row", justifyContent:'space-around'
    },
    touch:{
        height:40, justifyContent:'center',
                      alignItems:'center', 
                      backgroundColor:'#e4f5e8', width:100
    },
    dollar1:{
        color:'#20D167',fontSize:15,fontWeight:'bold'
    }
})