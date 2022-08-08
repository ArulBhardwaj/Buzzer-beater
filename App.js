import * as React from "react";
import { Text,View,StyleSheet} from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Constants from 'expo-constants';


export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
    </View>
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);