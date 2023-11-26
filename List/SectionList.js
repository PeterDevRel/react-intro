import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, StatusBar, FlatList, SectionList } from 'react-native'
import React from 'react'
import CustomButton from './components/CustomButton/CustomButton'
import pokemonList from './data.json'
import groupedPokemonList from './grouped-data.json'


export default function App() {

  return (          
    <SafeAreaView style={styles.container}>
        <View style={styles.scrollView}>
            <SectionList 
              sections={groupedPokemonList}
              renderItem={({item}) => {
                return (
                    <View style={styles.card}>
                        <Text style={styles.cardText}>{item}</Text>
                    </View>
                )
              }}
              renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeaderText}>{section.type}</Text>
                )}
             ItemSeparatorComponent={() => <View style={{height: 16}} />}
             SectionSeparatorComponent={() => <View style={{height: 16}} />}
            />
            {/* <FlatList 
                data={pokemonList}
                keyExtractor={(item, index) => item.id.toString()}
                numColumns={2}
                renderItem={({item}) => {
                    console.log(item.id)
                return ( 
                        <View style={styles.card} key={item.id}>
                            <Text style={styles.cardText}>{item.type}</Text>
                            <Text style={styles.cardText}>{item.name}</Text>
                        </View>
                    )
                }}

                ItemSeparatorComponent={<View style={{height: 16}} />}
                ListEmptyComponent={<Text> No items found</Text>}
                ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
                ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
                // horizontal
            /> */}
        </View>
        {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => {
                return(
                    <View style={styles.card} key={pokemon.id}>
                        <Text style={styles.cardText}>{pokemon.type}</Text>
                        <Text style={styles.cardText}>{pokemon.name}</Text>
                    </View>
                )
            })
        }
        </ScrollView> */}
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
        paddingHorizontal: 12
    },
    card: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        // marginBottom: 16,
    },
    cardText:{
        fontSize: 30
    },
    headerText:{
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 12,
    },
    footerText:{
        fontSize: 24,
        textAlign: 'center',
        marginTop: 12,
    },
    sectionHeaderText:{
        backgroundColor: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }


})