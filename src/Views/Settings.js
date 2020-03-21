import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {Card} from 'react-native-paper';

const Settings = () =>{
    return(
        <Card style={styles.myCard}>
            <Text>Welcome to settings!</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    myCard:{
        margin: 5,
        
        
    },
    cardView:{
        flexDirection: "row",
        padding: 6,
    },
    text:{
        fontSize: 20,
        marginLeft: 10,
        marginTop: 30,

    }
})
export default Settings;