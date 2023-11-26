import { useState } from 'react'
import {Button, Modal, View, Text} from 'react-native'


const logoImg = require('./assets/adaptive-icon.png')

export default function Modal() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60}}>
      <Button 
        title='Press' 
        onPress={() => setIsModalVisible(true)} 
        color="midnightblue"
        // disabled
      />
     <Modal 
      visible={isModalVisible} 
      onRequestClose={() => setIsModalVisible(false)}
      animationType='slide'
      presentationStyle='pageSheet'
      >
        <View style={{flex: 1, backgroundColor: 'lightblue', padding: 60}}>
          <Text>Modal Content</Text>
          <Button title='Close' color='midnightblue' onPress={() => setIsModalVisible(false)}/>
        </View>
     </Modal>
    </View>
  )
}