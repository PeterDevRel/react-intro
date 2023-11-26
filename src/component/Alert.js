import { useState } from 'react'
import {Button, Modal, View, Text, StatusBar, ActivityIndicator, Alert} from 'react-native'


const logoImg = require('./assets/adaptive-icon.png')

export default function Alert() {

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60}}>
     <Button onPress={() => Alert.alert('Invalid data')} title='Alert'/>
     <Button onPress={() => Alert.alert('Invalid data', "DOB Incorrect")} title='Alert2'/>
     <Button onPress={() => Alert.alert('Invalid data', "DOB Incorrect!", [
      {
        text: 'cancel',
        onPress: () => console.log("Cancel pressed")
      },
      {
        text: 'Ok',
        onPress: () => console.log("Ok pressed")
      }
     ])} title='Alert3'/>
     
    </View>
  )
}