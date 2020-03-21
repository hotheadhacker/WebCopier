import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {Card, FAB} from 'react-native-paper';

const Home=(props)=>{

    const data=[
        {id:1, name:'GeeksforGeeks', img:"data:image/png;base64,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"},
        {id:2, name:'Tutorials Point', img:'data:image/png;base64,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'},
        {id:3, name:'JavaTPoint', img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAegMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EADUQAAEEAgECBAUBBQkAAAAAAAABAgMEBREGEiEHEzFRFCJBYXGRFhcjMsEVQlJWgZKT0dL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzZ6AAAAAoXOPEC1xHJx1pcKk9eZnVDYSx0o/XqmuldKi/cC+g5JH4yWJW9UXGXyInZVZYVURf9h9/vfuf5Vn/AOV3/gDrAOQs8aZHvSNnHVdIq6axtraqvt/IdXoyTzVIZLcKQTuYiyRNf1Ixfbek2BnAAAHiLs9AA+GSskVyMe1ytXTka7elPsCleJVqKsuA82KaTzMnG1vl2Fi0vuuk+ZPsply+f5RSvWI6uAx89aNy+XJJlEje9vv0q3spGeK08TrPGa7ZGumTKxu8tFTq1+CGs8IyzM5lbFzAUc4y1YdJDYmuujcxq+jdfYCcf4j7w2JzMWNX4G1a+Ftq+XTqzt+qdtOT9CYyvKZK3LcXx+hUZZltMWWxIsit8iNP72kRd70vt9CC4/wm3+7i7x7LxRx2JpZJI0a/qRrtorF3+UMvh5xbM0LF7J8kcz+0ZYY60LmvR/RG1ut7/Ov0Ay5XlfKMY21NNx7HOrV+pzlTKJ1qxPr09Prrvo2c5j6niHwiOaszy5Zo/PqOkTvHJ37Lr6fRSkx8BzUFS5WtcdoZK1I6RWZF95yP7707p909TpXBsZaxHFMdj77WtswRq2RGu2m9r9QOCYTlGf4usuNozpWT4j+LG6FrlR/ZF9U39Dofiry7N8eyWOgxVpsMc1VZJEWFrtu3r6oafjNxVIbDOS049Mc9rbqInovo1/8ARf8AQjeWTVvEbleHqcfkkc1tdWTSPjVvlN6tq7v9v6EGx4OcWdkslJyLIR7hgkX4dHJpHy/V34Tf6/guNrmGfl5Nk8NhMBWu/AdPW+S55aqjkTXbpLhisfXxWPgo040jggYjGNT29zmdSznK3iTyhcDj6917vK8xs8/lo1NJpU9yicr+JFZuDyd3JUJqt7GyNhnpI5HKr3Lpul9t77/Yx/tvm8bLRl5Nx9lLH3Xtjjnhs+Y6NXenW3SaIz93uXyWGzk2UnrRZnJ2I52ticqxx9C7Rqrr7qhsZPD8u5W3HY3NUKVClWmZLZnjn61l6f8AC1PTYEdU5e/ANzk+Pxq2Jpc78J5c9xyo5y9WlRen5U7enoWGvzLOQ5qPEZrj0dW3ahe+msVvzGyvair0uXpTp9NbK/Y4NnX/ABnTXh1LyFl5v8ZO8KK7a/nv6Fs5Bg797nHHsrXjatSk2RJnK/Sp1emk+pBV/DC5ml5HnmOxkSQzX3OuyfEbWu/5vlamvmTf17HVO/sv6lH43hc9geXZZ7a9WbEZO0th06S6ki7KqJ067910XjS+xRGfs5h/7ZXMLQhdkV1uw5FV3ZNJ6+nYlQAAAAAADBdqw3qc1S1GkkEzFY9i/VFKvwDhEHEmXH+Yk9meRUbJr+WJF+Vv/f3LeABo1cTRqZG1kK9drLdrXnyoq7fr0N4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z'},
        {id:4, name:'w3Schools', img:'data:image/jpeg;base64,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'},
        {id:5, name:'React Native', img:'data:image/png;base64,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'},
    ]
 
    const renderList = data.map((item)=>{
        return(
            <Card style={styles.myCard} key={item.id}>
            <View style={styles.cardView}>
                <Image
                style={{width:50, height:50, borderRadius:50}}
                source={{uri: item.img}}
                />
                <Text style={styles.text}>{item.name}!</Text>
                <Text style={styles.downTxt}>Download Complete</Text>
            </View>
            
            
        </Card>
        )
    }) 

    return(
       <View style={{flex:1}}>
           {renderList}
           <FAB
                onPress={() => props.navigation.navigate('Downloaded')}
                style={styles.fab}
                small={false}
                theme={{colors:{accent:'#5d1491'}}}
                icon="plus"
                
             />
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
        marginTop: 10,

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
    downTxt:{
        margin: 10,
        color: 'green' 
    }
})

export default Home;
