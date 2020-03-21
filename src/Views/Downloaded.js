import React,{useState} from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {TextInput, Button, Card, Snackbar} from 'react-native-paper';

const Downloaded = (props) =>{
    const [Name, setName] = useState('');
    const [Url, setUrl] = useState('');
    const [Visible, setVisible] = useState(false);


    return( 
        <View style={styles.root}>
            <Card style={styles.myCard}>
                <View>
                <TextInput
                    label='Enter Project Name'
                    style={styles.inputStyle}
                    value={Name}
                    theme={theme}
                    mode='outlined'
                    onChangeText={text => setName({ text })}
                />

                <TextInput
                    label='Enter a Valid URL'
                    style={styles.inputStyle}
                    value={Url}
                    theme={theme}
                    mode='outlined'
                    onChangeText={text => setUrl({ text })}
                />

                <Button icon="download" mode="contained" 
                onPress={text => setVisible(true)}
                >
                    Download Website!
                </Button>
                
                </View>
          </Card>

          <Snackbar
                visible={Visible}
                onDismiss={text => setVisible(false)}
                action={{
                label: 'View',
                 onPress: () => {
                props.navigation.navigate('Home')
                // Do something
                 },
                }}
                >
                {Url.text+ "is added successfully!"}
                </Snackbar>
        </View>
    )
}

const theme = {
    colors:{
        primary:'#5d1491'
    }
}

const styles = StyleSheet.create({
    root:{
        flex: 1,

    },
    inputStyle:{
        margin: 5
    },
    myCard:{
        margin: 5,
        
        justifyContent: 'center'
        
    },
})
export default Downloaded;