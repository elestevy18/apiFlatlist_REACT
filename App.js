//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, Image } from 'react-native';
import ApiManager from './api/ApiManager'
import RowLayout from './RowLayout'

const friendsArray = [
  {name : "Krunal", key:1},
  {name : "Sb",key:2},
  {name : "kevin",key:3},
  {name : "zyou",key:4},
  {name : "eli",key:5},
  {name : "aida",key:6},
  {name : "sk",key:7},
  {name : "lokesh",key:8},
  {name : "alok c",key:9}
];


//Create custom components
const App = () => {

  //Declare variable
  const [counter, setCounter]  = useState(0); //hooks

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response.data);
      console.log("data:" +result.data)
      console.log("result:" +result)
  };

  return (
   
    <View style={styles.container}>
      
      <Text>we have found : {result.length} results</Text>
      
    
      <Button title="Retrieve POST"
      onPress={()=>{
        getPost();
      }}/>

    

 {/* <FlatList 
              data={result}
              renderItem = { ({item}) => {
                  return <View style={{
          
                    flex: 1,
                    flexDirection: "row"
                    }}>
                    
                    <Image
        source={{uri: "https://i.picsum.photos/id/912/200/300.jpg?hmac=wRzqCXn4iQFYYTjMpB_LljooIBYELbMYz8kUuWS-toc"}}
        style={{width: 50, height: 50, borderRadius: 10}}
      />
      <View>
                   <Text styles={styles.title}
                    style={{ fontSize: 15, fontStyle: 'italic' }}> {item.userid} {item.title}
                    
                    </Text>
                    <Text styles={styles.title}
                    style={{ fontSize: 10 }}> {item.id} {item.body}
                    </Text>
                    </View>
                    
                    </View>;
          }}
        />  */}

<FlatList 
              data={result}
              renderItem = { ({item}) => {
                  return <View style = {styles.container}>
                  <RowLayout id = {item.id} title ={item.title} body = {item.body}/>
                  {/* <RowLayout id = 'Elijah' description = 'second'/> */}
                </View>
                }}/>
                
                <StatusBar style="auto" />
                 </View>


   
  );
}

//Export 
export default App;

//Apply Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});