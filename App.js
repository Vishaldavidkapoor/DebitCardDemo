
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from './src/components/BottomNav/BottomNav';
import DebitCardScreen from './src/components/debitCardScreen/DebitCardScreen';
import DetailsScreen from './src/components/DetailsScreen/DetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebitLimitScreen from './src/components/DebitLimitScreen/DebitLimitScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
     
    // <DebitCardScreen/>
    // {/* <BottomNav/> */}
    // <DetailsScreen/>
    // <BottomNav/>
    //  </View>
    <View style={styles.container}><NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="DebitCardScreen">
      <Stack.Screen  name="DebitCardScreen" component={DebitCardScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="DebitLimitScreen" component={DebitLimitScreen} />
    </Stack.Navigator>
  </NavigationContainer></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C365A',
  },
});
