/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, ScrollView, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'
// import CardView from 'react-native-cardview'

import {Actions } from 'react-native-router-flux'
import {BoxShadow} from 'react-native-shadow'
import { Rating, AirbnbRating } from 'react-native-elements';

fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;
const shadowOpt = {
  width:100,
  height:100,
  color:"#fff",
  border:2,
  radius:3,
  opacity:0.2,
  x:0,
  y:3,
  style:{marginVertical:5}
}
export default class Switch_EN extends Component {
  state = {
    checked : false,
  }
 
  render() {
    return (
      <View>
    <ScrollView>
    
            <ImageBackground style={{width: '100%',
       height: fh * .4, 

      
      }} source={require('./assets/2.png')}>
        <View style={{
          // flex : 1,
          flexDirection : 'row',
          padding: 20,
          justifyContent: 'space-between',
          
        }}>
         <Icon
            name='angle-left'
            type='font-awesome'
            color='#fff'
            onPress={() => Actions.pop()} />
          <Icon
            name='ellipsis-v'
            type='font-awesome'
            color='#fff'
            onPress={() => console.log('hello')} />
        </View>

        <View style={{
          position :'relative',
          marginTop : -40,
          flexDirection : 'column',
          alignItems : 'center',
          justifyContent : 'center',

        }}>
        <Text
        style={{
          fontSize : 18,
          color : '#fff',
        }}></Text>
        <TouchableWithoutFeedback onPress={() => Actions.EnterPage()}>
        <ImageBackground  
        style={{
          width : 90,
          height : 90,
        }}
        source={require('./assets/smallLogo.png')} /></TouchableWithoutFeedback>
      <Text
      style={{
        fontSize : 18,

          color : '#fff',
        }}></Text>
        </View>
      
      </ImageBackground>


        <ScrollView style={{
          
          height : fh * .6,
          width : fw,
          padding: 25,
          overflow: 'visible'
        }}>


        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection :'row'
        }}>

<TouchableWithoutFeedback onPress={() => Actions.Login_AR({needwork : true})}>

      <View style={{
        justifyContent:'center',
        alignItems:'center',
      }}>
      <ImageBackground style={{
          width: 100,
          height: 100,
          margin : 15,
        }} source={require('./assets/man1.png')}></ImageBackground>
        <Text style={{ fontSize: 19, color : '#23577c'}}>طالب الخدمة</Text>
      </View>
</TouchableWithoutFeedback>


<TouchableWithoutFeedback onPress={() => Actions.Login_AR({needwork : false})}>

      <View style={{
        justifyContent:'center',
        alignItems:'center',
      }}>
         <ImageBackground style={{
          width: 100,
          height: 100,
          margin : 15,

        }} source={require('./assets/man2.png')}></ImageBackground>
        <Text style={{ fontSize: 19,  color : '#23577c'}}>المهني</Text>

        </View>
        </TouchableWithoutFeedback>


        </View>

</ScrollView></ScrollView>
        


        
    </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  textStyle: {
    color: '#FFFFFF'
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 15,
    zIndex:999, 
    shadowOpacity: 1,
    elevation : 5,
    
  }
})