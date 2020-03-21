import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Views/Home';
import Downloaded from './src/Views/Downloaded';
import Settings from './src/Views/Settings';


const Stack = createStackNavigator();
const tabOptions = {
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#5d1491'
    }

}
 function App() {
  return (
    
    <View style={styles.container}>
      {/* <Home/> */}
      {/* <Downloaded/>
      <Settings/> */}
      

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home"
           component={Home}
          options = {tabOptions}
          />
          <Stack.Screen name="Downloaded"
           component={Downloaded}
           options = {{...tabOptions, title: 'Download'}}
           />
          <Stack.Screen name="Settings"
           component={Settings}
           options = {{...tabOptions, title: 'Settings'}}
           />
       </Stack.Navigator>
    </View>

  );
}
export default () => {
  return(
    <NavigationContainer>
      <App/> 
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
 
  },
  
});


