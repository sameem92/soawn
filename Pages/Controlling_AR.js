import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableWithoutFeedback} from 'react-native';

import Rate_AR from './Rate_AR';

import Profile_AR from './profile_AR';

import SERVS_AR from './SERVS_AR';

import WorkSend_AR from './WorkSend_AR';

export default class Controlling_AR extends Component {
  state = {
    rate : false,
    profile : false,
    servs : false,
    worksend : true,
  }
  render() {
    return (
      <View style={{flex : 1}}>
        
        { this.state.rate == true  ? <Rate_AR/> : <View></View> }
        { this.state.profile == true  ? <Profile_AR/> : <View></View> }
        { this.state.servs == true  ? <SERVS_AR/> : <View></View> }
        { this.state.worksend == true  ? <WorkSend_AR/> : <View></View> }
  
        <View
          style={{
            // justifyContent : 'space-evenly',
            // alignItems :'stretch',
            flexDirection : 'row-reverse',
            position: 'absolute',
            flex : 1,
            bottom : 0,
            right : 0,
          }}>
          <View style={{
            position: 'relative',
            width :fw,
            flexDirection : 'row-reverse',

            justifyContent  : 'space-evenly',
            alignItems : 'center',

          }}>


<TouchableWithoutFeedback onPress={() => this.setState({ 
  
  rate : false,
    servs : false,
    worksend : false,
  profile : true })}>
          <View>
  <View style={{
    borderRadius : 50,
    backgroundColor : '#eee',
    width:70,

  }}>

  

<ImageBackground source={require('./assets/m1.png')} style={{
            width: 60,
            height: 60,
          }}>


          </ImageBackground> 
          </View>
          <Text style={{
            textAlign : 'center',
            marginTop : 10,
          }}>الملف الشخصي</Text>
  </View>
</TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={() => this.setState({ 
    rate : false,
    profile : false,
    worksend : false,
  
  servs : true })}>
<View>
  <View style={{
    borderRadius : 50,
    backgroundColor : '#eee',
    width:70,
    
  }}>
           <ImageBackground source={require('./assets/m2.png')} style={{
            width: 70,
            height: 70,
          }}>
          </ImageBackground>


          </View>
          <Text style={{
            textAlign : 'center',
            marginTop : 1,
          }}>اخر العروض</Text>
</View>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={() => this.setState({
  
  rate : false,
    profile : false,
    servs : false,
  worksend : true 
  })}>
<View>
          <View style={{
    borderRadius : 50,
    backgroundColor : '#eee',
    width:70,
    
  }}>
            <ImageBackground source={require('./assets/m3.png')} style={{
            width: 60,
            height: 60,
          }}>
          </ImageBackground>

</View>
 <Text style={{
            textAlign : 'center',
            marginTop : 10,
          }}>الخدمات</Text>
</View>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={() => this.setState({ 
    profile : false,
    servs : false,
    worksend : false,
  rate : true })}>
<View>
<View style={{
    borderRadius : 50,
    backgroundColor : '#eee',
    width:70,
    
  }}>
            <ImageBackground source={require('./assets/m4.png')} style={{
            width: 70,
            height: 70,
          }}>
          </ImageBackground>

          </View>
          <Text style={{
            textAlign : 'center',
            marginTop : 1,
          }}>التقيم</Text>
          </View>
          </TouchableWithoutFeedback>
          </View>
          </View>

      </View>
    )
  }
}
