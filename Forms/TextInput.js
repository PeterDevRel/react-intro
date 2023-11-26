import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput,Switch } from 'react-native'


export default function App() {
  const [name, setName] = useState()
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (          
    <SafeAreaView style={styles.container}>
        <TextInput 
           placeholder='email@example.com'
           style={styles.input}
           value={name}
           onChangeText={(value) => setName(value)}
           autoCorrect={false}
           autoCapitalize='none'
           multiline
           numberOfLines={3}
        //    secureTextEntry={true}
        //    keyboardType='numeric'
        />
        <TextInput 
           placeholder='Message'
           style={[styles.input, styles.multilineText]}
           multiline
        />
        <Text style={styles.text}>My Name is {name}</Text>
        <View style={styles.switchContainer}>
            <Text style={styles.text}>Dark Mode</Text>
            <Switch 
                value={isDarkMode}
                onValueChange={() => setIsDarkMode((previousState) => !previousState )}
                trackColor={{false: '#767577', true: 'deepblue'}}
                thumbColor="#f4f3f4"
            />
        </View>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1
    },
    text:{
        fontSize: 30,
        padding: 10
    },
    multilineText: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    }

   
})