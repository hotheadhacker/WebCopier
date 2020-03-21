import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {Card} from 'react-native-paper';

const Home=()=>{

    const data=[
        {id:1, name:'Henky Penky', img:"data:image/jpeg;base64,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"},
        {id:2, name:'Suzen Kamo', img:'data:image/jpeg;base64,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'},
        {id:3, name:'Enu Lee', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStcc9tmfTs-_q7GoNAwoqucAqvxVu3zmuENXMGlXWNzXuxMaEu'},
        {id:4, name:'Mouni Sparkles', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5Bou66P4OQGCqlfKZx1rXC3Fkl42MYOCBrbnupb_x1JxW5U_G'},
        {id:5, name:'Kalee Cuco', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR93czT5c-S3CG-fCBu0y37Nq2_t6KEBVgW-vtkv3bFCX8Hb7As'},
    ]

    const renderList = data.map((item)=>{
        return(
            <Card style={styles.myCard} key={item.id}>
            <View style={styles.cardView}>
                <Image
                style={{width:100, height:100, borderRadius:50}}
                source={{uri: item.img}}
                />
                <Text style={styles.text}>{item.name}!</Text>
            </View>
            
        </Card>
        )
    }) 

    return(
       <View>
           {renderList}
       </View>
    
    );
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

export default Home;
