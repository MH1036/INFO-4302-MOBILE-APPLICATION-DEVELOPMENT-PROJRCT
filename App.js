import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { View,Text } from 'react-native';
//import {HomeScreen, RegisterScreen, DetectScreen} from './Screens'
import HomeScreen from "./Screens/HomeScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import DetectScreen from "./Screens/DetectScreen";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detect: DetectScreen,
    Register: RegisterScreen

  },  

    
    {
      initialRouteName: 'Home',

      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
);

const AppContainer = createAppContainer(RootStack );

export default class App extends React.Component {
  render() {
    return (
      
        <AppContainer />
      
    );
  }
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */