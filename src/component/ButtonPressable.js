import {Button, Image, ImageBackground, Pressable, ScrollView, Text, View} from 'react-native'


const logoImg = require('./assets/adaptive-icon.png')

export default function ButtonPressable() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60}}>
      <Button 
        title='Press' 
        onPress={() => console.log("I'm a button")} 
        color="midnightblue"
        disabled
      />
      <Pressable onPress={() => console.log('Image pressed')}>
        <Image source={logoImg} style={{width: 300, height: 300}} />
      </Pressable>
        <Text>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
           lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
          lorem ipsum dolor sit amet, consectetur adipiscing elit, Donec
        </Text>
    </View>
  )
}