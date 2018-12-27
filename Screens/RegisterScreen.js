import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
  Image, 
  AppRegistry
} from 'react-native';

import firebase from "firebase"
require("firebase/firestore");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDUXtiC_R0FzR744G3qyOo12Tbj0FDzInQ",
  authDomain: "security-3c08a.firebaseapp.com",
  databaseURL: "https://security-3c08a.firebaseio.com",
  projectId: "security-3c08a",
  storageBucket: "security-3c08a.appspot.com",
  messagingSenderId: "110890495327"
};
firebase.initializeApp(config);

var db = firebase.firestore();

export default class Regform extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      DOB: "",
      Vname: '',
      Vid: '',
      Vmobile: '',
      Vreason: '',
      Vtime: '',
    }


  }

  submit = async () => {

    if (this.state.DOB == "" || this.state.Vname == "" || this.state.Vid == "" || this.state.Vmobile == "" || this.state.Vreason == "" || 
    this.state.Vtime == "") {
      alert("Please Fill in All the Fields");
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.regform}>
      <Text style={styles.header}>Visitor Registration System</Text>

      <TextInput style={styles.textinput} placeholder="Visitor name" placeholderTextColor='#fff68f'
       underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder="Visitor ID" placeholderTextColor='#fff68f'
       underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder="Visitor Phone No" placeholderTextColor='#fff68f'
       underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder="Reasons for visiting" placeholderTextColor='#fff68f'
       underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder="Visiting time" placeholderTextColor='#fff68f'
       underlineColorAndroid={'transparent'}/>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.btntext}>Registr a vistor</Text>
      
      </TouchableOpacity>


      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 40,
    paddingRight: 40,
  },
  regform: {
    alignSelf: 'stretch',
  },
  header:{
    fontSize: 24,
    color: '#fff',
    paddingBottom:10,
    marginBottom: 20,
    marginTop: 20,
    borderBottomColor: '#fff',    
    borderBottomWidth: 1,
  },
  textinput:{
    color: '#fff',
    fontSize: 20,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    borderBottomColor: '#fff',    
    borderBottomWidth: 1,
    },
    button:{
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop:30,
    },
    btntext:{
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
    image:{
      alignSelf: 'stretch',
      alignItems: 'center', 
      width: 100,
      height: 100,
    },
    
});