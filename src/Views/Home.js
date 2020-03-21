import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper';

const Home=()=>{
    return(
        <Card style={styles.myCard}>
            <Text>Main or Home Screen!</Text>
        </Card>
    
    );
}

const styles = StyleSheet.create({
    myCard:{
        margin: 5,
        padding: 5
    }
})

export default Home;
