import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import CourseListScreen from './screens/CourseListScreen';
import SettingScreen from './screens/SettingScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import { AboutStack } from './AppStack';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarLabelPosition: 'below-icon',
      tabBarShowLabel: true,
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: '#f33'
    }}>
      <Tab.Screen 
        name="Course List" 
        component={CourseListScreen} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}  
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />,
          tabBarBadge: 3
        }}
      />
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen name="About Stack" component={AboutStack} options={{headerShown: false}} />
    </Tab.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})