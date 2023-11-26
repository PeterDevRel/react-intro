import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Pressable, Text, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'


const Stack = createNativeStackNavigator()

export const AboutStack = () => {
  return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerTitleAlign: 'center',
          headerStyle:{
              backgroundColor: '#6a51ae',
          },
          headerTintColor: '#fff',
          headerTitleStyle:{fontWeight: 'bold'},
          headerRight:() => {
            return( 
              <Pressable onPress={() => alert("Menu button pressed!")}>
                  <Text style={{color: '#fff', fontSize: 16}}>Menu</Text>
              </Pressable>
          )},
          contentStyle:{
              backgroundColor: '#e8e4f'
          }
        }}>
          <Stack.Screen  name='Home' component={HomeScreen} options={{
              title: 'Welcome Home',
          }}
          />
          <Stack.Screen 
              name='About' 
              component={AboutScreen} 
              initialParams={{name: 'Guest'}}
              // options={({route}) => ({
              //     title: route.params.name
              // })}
          />
      </Stack.Navigator>
    
  )
}

export default function App() {
    return (
      <NavigationContainer>
        <AboutStack />
      </NavigationContainer>
    )
}
