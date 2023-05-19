import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [message, setMessage] = useState('')

  useEffect(()=>{
    fetch("/users").then(r=>{
      console.log(r);
      return r.json();
    }).then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log(`There's a problem with your fetch operation: ${err.message}`);
    })
  },[])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{message}</Text>
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
