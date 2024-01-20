import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, Image } from 'react-native';

export default function App() {

    const [text, setText] = useState("")

    const onPress = () => {
    
      Alert.alert(`kirjoitit:  ${text}`);
    }

  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require('./assets/favicon.png')}/>
      <TextInput style={{borderColor: "grey",borderWidth:1, width: 60}} onChangeText={input => setText(input)} value={text}/>
      <Button title= 'PRESS' onPress={onPress}/>

      <StatusBar style="auto" />
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
