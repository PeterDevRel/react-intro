import {Image, ImageBackground, ScrollView, Text, View} from 'react-native'


const logoImg = require('./assets/adaptive-icon.png')

export default function Scroll() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={logoImg} style={{width: 300, height: 300}} />
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
        <Image source={logoImg} style={{width: 300, height: 300}} />
      </ScrollView>
    </View>
  )
}