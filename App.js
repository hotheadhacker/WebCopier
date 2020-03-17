import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Card, Subheader, Button, ActionButton, Divider, Icon, BottomNavigation, Toolbar  } from 'react-native-material-ui';



export default function App() {
  return (
    
    <View style={styles.container}>
      <Toolbar style={styles.newStyl}
        leftElement="menu"
        centerElement="WebCopier - Alpha"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
      <Text>Welcome to the webCopier APP3!</Text>
      <Divider/>
      <Text></Text>
      
      <Divider/>
      <Icon name="web"/>
      <Card>
        <Text>Enter URL of a website to clone</Text>
      </Card>
      <Button raised primary text="Copy &amp; Save" />
      <Subheader text="Files will be stored to .local/downloads" />


      <ActionButton /> 

      
    </View>

    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});


