import React, {useState} from 'react';
import { View, StyleSheet, Platform, Text, TextInput, Button} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import AppNavigator from '../navigation/AppNavigator';
import * as FirebaseAPI from '../modules/firebaseAPI';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
    email: 'Enter email',
    password: 'Enter password'
  };
  this.addUser = this.addUser.bind(this);
  this.loginUser = this.loginUser.bind(this);
  // this.watchAuthState = this.watchAuthState.bind(this);
  }


  addUser(){
    FirebaseAPI.createUser(this.state.email,this.state.password);
  }

  loginUser(){
    FirebaseAPI.loginUser(this.state.email,this.state.password);
    
  }

  componentDidMount(){
    this.watchAuthState(this.props.navigation);
  }

  watchAuthState(navigation){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        navigation.navigate('Main');
      }
    })
  }

  render(){
    return (
    <View style={styles.container}>
      <View style={styles.spacer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Create an account below</Text>
          <TextInput onChangeText={(text)=>this.setState({email: text})} value={this.state.email} style={styles.form}>
          </TextInput>
          <TextInput onChangeText={(text)=>this.setState({password: text})} value={this.state.password} style={styles.form}>
          </TextInput>
          <Button title="Create User" onPress={this.addUser} style={styles.buttonSubmit}></Button>
          <Button title="Login User Exits" onPress={this.loginUser} style={styles.buttonSubmit}></Button>
        </View>
      </View>
    </View>
  );
  }
  
}

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
    },
    spacer: {
      flex: 1,
    },
    textContainer: {
      flex: 1,
      marginHorizontal: 50,
      paddingTop: 100
    },
    text: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    form:{
      borderBottomColor:'black',
      borderBottomWidth: 1,
      padding: 5,
      marginBottom: 10
    },
    buttonSubmit:{
      marginTop: 5
    }
  });