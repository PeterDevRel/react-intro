import React, { useEffect, useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    Platform, 
    TextInput, 
    View, 
    SafeAreaView, 
    StatusBar, 
    FlatList,
    Button,
    ActivityIndicator
} from 'react-native'


export default function App() {
    const [postlist, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    const [error, setError] = useState("")

    const fetchData = async(limit = 10) => {
       try {
           const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
           const data = await response.json()
           setPostList(data)
           setIsLoading(false)
           setError("") 
       } catch (error) {
         console.log("Error fetching data:", error)
         setIsLoading(false)
         setError("failed to fetch post list")
       } 
    }

    const handleRefresh = () =>{
        setRefreshing(true)
        fetchData(20)
        setRefreshing(false)
    }

    const addPost = async() => {
        setIsPosting(true)
        try{
            const response = await fetch(`http://jsonplaceholder.typicode.com/posts`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: postTitle,
                    body: postBody,
                })
            });
            const newPost = await response.json()
            setPostList([newPost, ...postlist])
            setPostTitle("")
            setPostBody("")
            setIsPosting(false)
            setError("")
        }
        catch(error){
            console.log("Error adding new post:", error)
            setError("Failed to add new post")
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    setTimeout(() => {
        if(isLoading){
            return (
                <SafeAreaView style={styles.loadingContainer}>
                    <ActivityIndicator size='large' color="#0000ff" />
                    <Text>Loading...</Text>
                </SafeAreaView>
            )
        }
    }, 2000)
  

  return (          
    <SafeAreaView style={styles.container}>
        {error ? ( <View style={styles.errorContainer}><Text style={styles.errorText}>{error}</Text></View>): (
        <>    
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder='Title'
                value={postTitle}
                onChangeText={setPostTitle}
            />
            <TextInput 
                style={styles.input}
                placeholder='Body'
                value={postBody}
                onChangeText={setPostBody}
            />
            <Button 
                title={isPosting ? "Adding..." : "Add Post"}
                onPress={addPost}
                disabled={isPosting}
            />
        </View>    
        <View style={styles.listContainer}>
            <FlatList 
                data={postlist}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card} key={item.id}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.body}>{item.body}</Text>
                        </View>
                    )}}
                ItemSeparatorComponent={<View style={{height: 16}} />}
                ListEmptyComponent={<Text> No Posts found</Text>}
                ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
                ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
                refreshing={refreshing}
                onRefresh={handleRefresh} 
            />
        </View>
        </>)}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight
   },
   listContainer:{
    flex: 1,
    paddingHorizontal: 16
   },
   card:{
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
   },
   title:{
    fontSize: 30,
   },
   body:{
    fontSize: 24,
    color: "#666666"
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
    loadingContainer:{
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:{
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8
    },
    errorContainer:{
        backgroundColor: '#FFC0CB',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
        alignItems: 'center'
    },
    errorText: {
        color: '#D8000c',
        fontSize: 16,
        textAlign: 'center'
    }
    
})