import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Dependency required

import Slider from '@react-native-community/slider'; 

export default class App extends React.Component {
  constructor(){
    super();
    this.state={     //Defining State
      value:''
    }
  } 
  render(){
 return (
      //Slider Component
    <View style={styles.container}>

    <Slider
    style={{width: "70%", height: 40}}
    minimumValue={0}
    maximumValue={5}
    step={1}
    thumbTintColor="#FFE5BB"
    minimumTrackTintColor="#FFE5B4"
    maximumTrackTintColor="grey"
    onValueChange={(val)=>{
this.setState({value:val})
    }}
  />
   <Text>Slider Value: {this.state.value}</Text>
    </View>
  );
  }
 
}
//Styling
const styles = StyleSheet.create({
  container: {
    marginTop:50,
    justifyContent: 'center',
    padding: 8,
    alignItems:'center'
  },
 
});
