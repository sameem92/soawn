/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, ScrollView, StyleSheet} from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'
// import CardView from 'react-native-cardview'
import { Actions } from 'react-native-router-flux';
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
export default class Thankspage_AR extends Component {
  state = {
    checked : false,
    Type_ : this.props.Type_,
    Email: this.props.Email,
  }
 
  render() {
    return (
      <ImageBackground style={{
        width: fw,
        height: fh,
      }} source={require('./assets/thanks-bg.png')}>
    <ScrollView>

        <View style={{
          // flex : 1,
          flexDirection : 'row',
          padding: 20,
          justifyContent: 'flex-end',
          
        }}>
          <Icon
            name='times'
            type='font-awesome'
            color='#fff'
            onPress={() => Actions.pop()} />
         

</View>
        <ScrollView style={{
          
          height : '100%',
          width : fw,
          padding: 25,
          overflow: 'visible',
          
        }}>

        <ScrollView style={{
           width: '100%',
          height :'100%',
        }}>
        <View style={{
         
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>


        <ImageBackground style={{
          width: 150,
          height: 150
        }} source={require('./assets/logo_thanks.png')}></ImageBackground>

        <Text style={{
          color :'#fff',
          fontSize : 32,
          marginTop : 10,
          marginBottom : 10,
        }}>شكرا لك</Text>


      <Text style={{
          color :'#fff',
          fontSize : 16,
          marginTop : 10,
          marginBottom : 10,
        }}>لتسجيل اشتراكك</Text>




<View style={{
       justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 30,
        marginTop : 60,
}}>
<TouchableWithoutFeedback onPress={() => {
  Actions.Controlling_EN({
    email : this.state.Email,
    Type_ : this.state.Type_,
  })
}}>

        <View style={{
          borderRadius : 26,
          borderColor : '#eee',
          backgroundColor : '#1f4955',
          padding: 12,
          width : fw * .6,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
        <Text style={{color : '#fff', fontSize: 16}}>استكشف القائمة</Text>
</View>
</TouchableWithoutFeedback>
        </View>
        </View>
        </ScrollView>






</ScrollView>
</ScrollView>
         
        


        
    </ImageBackground>
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