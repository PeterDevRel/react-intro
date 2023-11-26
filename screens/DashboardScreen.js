import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Button title='Toggle drawer' onPress={() => navigation.toggleDrawer()} />
      <Button title='Settings' onPress={() => navigation.jumpTo("Settings")} />
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    }
})