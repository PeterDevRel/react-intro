import { useState } from 'react'
import {Button, Modal, View, Text, StatusBar, ActivityIndicator} from 'react-native'


const logoImg = require('./assets/adaptive-icon.png')

export default function App() {

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60}}>
     
     <ActivityIndicator />
     <ActivityIndicator size='large'/>
     <ActivityIndicator size='large' color='red'/>
     <ActivityIndicator size='large' color='red' animating={false}/>
     
    </View>
  )
}