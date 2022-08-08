import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
      <Text style={styles.text}></Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  textContainer:{
    backgroundColor:'orange',
  },
  text:{
    color:'black',
    padding:20,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
  }
});