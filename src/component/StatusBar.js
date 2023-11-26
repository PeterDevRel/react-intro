import { useState } from 'react'
import {Button, Modal, View, Text, StatusBar} from 'react-native'


const logoImg = require('./assets/adaptive-icon.png')

export default function StatusBar() {
  const [showBar, setShowBar] = useState(false)

  const showbar = () => {
    setShowBar(!showBar)
  }
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60}}>
      <Button onPress={showbar} title='Show Bar' />
      <StatusBar backgroundColor="lightgreen" barStyle='default' hidden={showBar} />
     
    </View>
  )
}