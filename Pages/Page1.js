/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Store from '../assets/store/store';


fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;
export default class Page1 extends Component {
  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/1.png')}>
      <View style={{
        width: fw,
        height: fh,
        // flex : 1,
        
        justifyContent: 'flex-end',
        
      }}>

      <View style={{
        paddingBottom: 80,
        paddingLeft: fw * .25,
      }}>

<TouchableWithoutFeedback onPress={() => {
  Store.dispatch({
    type : 'addState',
    tag: 'lang',
    tagValue : 'AR',
  })
  Actions.Switch_AR()
}}>
<View style={{
        width : fw * .5,
        height: 40,
        backgroundColor: '#1f4b58',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems : 'center',
        marginBottom : 10,
       
      }}><Text style={{
        color: 'white',
        fontSize: 18,
      }}>دخول</Text></View>
      </TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={() => {
   Store.dispatch({
    type : 'addState',
    tag: 'lang',
    tagValue : 'EN',
  })
  Actions.Switch_EN()
}}>
      
      <View style={{
        width : fw * .5,
        height: 40,
        backgroundColor: '#1f4b58',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems : 'center'
       
      }}><Text style={{
        color: 'white',
        fontSize: 18,
      }}>ENTER</Text></View>
</TouchableWithoutFeedback>
      </View>

      </View>
      </ImageBackground>
    );
  }
}

