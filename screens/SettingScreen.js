import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Setting Screen</Text>
    </View>
  )
}

export default SettingScreen

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