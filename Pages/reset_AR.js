/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';


fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

export default class reset_AR extends Component {
  state = {
    checked : false,
  }
 
  render() {
    return (
    <View>
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
        }}>نسيت الرقم السري</Text>
           <TouchableWithoutFeedback onPress={() => Actions.EnterPage()}>

        <ImageBackground 
        style={{
          width : 90,
          height : 90,
        }}
        source={require('./assets/smallLogo.png')} />
        </TouchableWithoutFeedback>
      <Text
      style={{
        fontSize : 18,

          color : '#fff',
        }}></Text>
        </View>
      </ImageBackground>


      <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <View style={{
            
            position: 'absolute',
            // right : 0,
          

            padding: 15,
            // flex : 1,
            
            // justifyContent: 'flex-end',
            // width: fw ,
            height: 50,
            // backgroundColor : 'blue',
            zIndex : 99,

            // justifyContent : 'flex-end',
            // alignItems: 'flex-start',
            left:40, 
            // marginTop : 15,
            // left : 0,
            // left : 40,
          }}>
          <Icon
            name='user'
            type='font-awesome'
            color='#aaa'
            onPress={() => console.log('hello')} /></View>

        <TextInput style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="البريد الاكتروني" />
        
        </View>

        <View style={{
          justifyContent :'center',
          alignItems : 'center'
        }}>

          <Text style={{
            textAlign : 'center',
          }}>ادخل بريدك الاكتروني لارسال {"\n"} استعادة الرقم السري</Text>
        </View>

        <View style={{
       justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
}}>

  <TouchableWithoutFeedback onPress={() => Actions.Code_AR()}>
        <View style={{
          borderRadius : 26,
          borderColor : '#eee',
          backgroundColor : '#cd8d2d',
          padding: 12,
          width : fw * .8,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
        <Text style={{color : '#fff', fontSize: 16}}>استعادة الرقم السري</Text>
</View>
</TouchableWithoutFeedback>

        </View>

        


        
    </View>
    );
  }
}

