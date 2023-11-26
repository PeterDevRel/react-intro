import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import Box from './Layout/Box'

export default function App() {
  return (
    // <View style={{backgroundColor: 'plum', flex: 1}}></View>
    <View style={styles.container}>
        <Box style={{ backgroundColor: '#8e9b00', alignSelf: 'flex-start'}}>Box 1</Box>
        <Box style={{ backgroundColor: '#b65d1f', alignSelf: 'flex-end'}}>Box 2</Box>
        <Box style={{ backgroundColor: '#1c4c56', alignSelf: 'center'}}>Box 3</Box>
        <Box style={{ backgroundColor: '#ab9156', alignSelf: 'stretch'}}>Box 4</Box>
        <Box style={{ backgroundColor: '#6b0803', alignSelf: 'auto'}}>Box 5</Box>
        <Box style={{ backgroundColor: '#1c4c56'}}>Box 6</Box>
        <Box style={{ backgroundColor: '#b95f21'}}>Box 7</Box>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: Platform.OS === 'android' ? 20 : 30,
        borderWidth: 6,
        borderColor: 'red'
    }
})