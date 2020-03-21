import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Constants from 'expo-constants';

import Home from './src/Views/Home';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Home/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    marginTop: Constants.statusBarHeight,
  },
  
});


