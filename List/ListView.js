import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import CustomButton from './components/CustomButton/CustomButton'
import pokemonList from './data.json'



export default function App() {

  return (          
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
                return(
                    <View style={styles.card} key={pokemon.id}>
                        <Text style={styles.cardText}>{pokemon.type}</Text>
                        <Text style={styles.cardText}>{pokemon.name}</Text>
                    </View>
                )
            })
        }
        </ScrollView>
    </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
    box: {
        padding: 20,
    },
    text: {
        ...Platform.select({
            ios:{
                color: "purple",
                fontSize: 24,
                fontStyle: 'italic'
            },
            android:{
                color: 'blue',
                fontSize: 30,
            },
        }),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollView: {
        paddingHorizontal: 16
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
    },
    cardText:{
        fontSize: 30
    }


})