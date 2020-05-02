import React, { Component } from "react";
import { Text, View } from "react-native";
import  firebase  from 'firebase';
import Header from './src/components/Header';
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDkDlSf5o1sdVuMzmlKrmUFU0d9rhSo6v0',
      authDomain: 'kpss-3eaf8.firebaseapp.com',
      databaseURL: 'https://kpss-3eaf8.firebaseio.com',
      projectId: 'kpss-3eaf8',
      storageBucket: 'kpss-3eaf8.appspot.com',
      messagingSenderId: '763950515102',
      appId: '1:763950515102:web:2206c10a90760f9a810c8f',
      measurementId: 'G-01GJ7KBL6H',
    });
  }
  render() {
    return (
      <View>
        <Header></Header>
        <View style = {{marginTop: 100}}>
        <LoginForm />
        </View>
        
      </View>
    );
  }
}

export default App;
