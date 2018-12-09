import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class RegisterScreen extends React.Component{

    static navigationOptions = {
        title: 'Register Page     '
      };

    render(){
        return(
            <View style={styles.container}>
            <Text>Register form</Text>
                <Button style={styles.button} title='Home' onPress={()=> this.props.navigation.navigate('Home')} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      textAlignVertical: 'top',
    },
    button: {
      flexDirection: 'row'  
    }
  });