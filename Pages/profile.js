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
export default class Profile_En extends Component {
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
            name='ellipsis-v'
            type='font-awesome'
            color='#fff'
            onPress={() => console.log('hello')} />
         <Icon
            name='angle-left'
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
        }}>PROFILE</Text>
        <ImageBackground 
        style={{
          width : 90,
          height : 90,
        }}
        source={require('./assets/smallLogo.png')} />
      <Text
      style={{
        fontSize : 18,

          color : '#fff',
        }}></Text>
        </View>
      <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999999,
          
          position: 'relative',

        }}> 

          <View style={{
            borderWidth: 3,
            borderColor : '#fff',
            borderRadius: 26,
            backgroundColor: '#aaa',
            width: 100,
            height: 100,
          }}> 


          </View>

        </View>
      </ImageBackground>


        <ScrollView style={{
          
          height : fh * .6,
          width : fw,
          padding: 25,
          overflow: 'visible'
        }}>



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

            justifyContent : 'flex-end',
            alignItems: 'flex-start',
            // right:0, 
            // marginTop : 15,
            // left : 0,
            right : 10,
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
        }} placeholder="Full Name" />
        
        </View>


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

            justifyContent : 'flex-end',
            alignItems: 'flex-start',
            // right:0, 
            // marginTop : 15,
            // left : 0,
            right : 10,
          }}>
          <Icon
            name='phone'
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
        }} placeholder="Phone Number" />
        
        </View>


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

            justifyContent : 'flex-end',
            alignItems: 'flex-start',
            // right:0, 
            // marginTop : 15,
            // left : 0,
            right : 10,
          }}>
          <Icon
            name='envelope'
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
        }} placeholder="Email" />
        
        </View>


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

            justifyContent : 'flex-end',
            alignItems: 'flex-start',
            // right:0, 
            // marginTop : 15,
            // left : 0,
            right : 10,
          }}>
          <Icon
            name='key'
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
        }} placeholder="Change Your Password" />
        
        </View>

</ScrollView></ScrollView>
          {/* <View
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
          }}>Profile</Text>
  </View>
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
          }}>Last Offers</Text>
</View>
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
          }}>Services</Text>
</View>
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
          }}>RATE</Text>
          </View>
          </View>
          </View> */}
        


        
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