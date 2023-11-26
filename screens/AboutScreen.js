import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'


const AboutScreen = ({navigation, route}) => {

    const {name} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        })
    },[navigation,name])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button 
        title='Update the name' 
        onPress={() => navigation.setParams({name: 'Peter'})} 
      />

     <Button 
        title="Go back with data "
        onPress={() => navigation.navigate('Home', {result: "Data from about"})}
     />
      
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    }
})