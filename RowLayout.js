import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const RowLayout = (props) => {
    return(
        <View style ={{borderWidth: 1, borderRadius: 20, width: "95%",padding: 20}}>
    <Image source ={{uri: props.uri}} />
    <View>
        <Text style = {styles.title}>
            {props.id}
        </Text>
        <Text style = {styles.title}> 
            {props.title}
        </Text>
        <Text style = {styles.desc}> 
            {props.body}
        </Text>
    </View>
</View>
    );
}



    

export default RowLayout;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      justifyContent: 'center',
      color: '#000',
      fontWeight: 'bold',
      alignContent: 'center',
      alignSelf: 'center'
    },
    desc: {
        fontSize: 12,
        justifyContent: 'flex-start',
        color: '#000',
      },
      ima: {
        height: 30,
        width: 30,
        
        borderRadius: 15,
        justifyContent: 'flex-start'
      },
  });