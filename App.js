import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';

export default function App() {
  const [outputText,setOutoutText]=useState("Hello")
  return (
    <View style={{padding:40}}>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
       <TextInput  placeholder="Course Goals....." style={{height: 40,width:'80%',borderColor:'#000',bordertWidth:1,padding:10}}/>
       <Button  title="ADD"/>
        </View>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
