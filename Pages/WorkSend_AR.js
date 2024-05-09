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
export default class WorkSend_AR extends Component {
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
        }}>الخدمات</Text>
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
      </ImageBackground>


        <ScrollView style={{
          
          height : fh * .6,
          width : fw,
          padding: 25,
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

            // justifyContent : 'flex-end',
            // alignItems: 'flex-start',
            right:20, 
            // marginTop : 15,
            // left : 0,
            // left : 10,
          }}>
          <Icon
            name='map-marker'
            type='font-awesome'
            color='#eee'
            onPress={() => console.log('hello')} /></View>

        <TextInput style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          textAlign: 'center',
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#eee'
        }} placeholder="الموقع" />
        
        </View>



        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>


        <TextInput style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          textAlign: 'center',

          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#eee'
        }} placeholder="توصيف الخدمة" />
        
        </View>


        <View style={{
          flexDirection :'row-reverse',
          justifyContent: 'space-evenly'
        }}>

        <View
        style={{

        padding : 9,
        borderRadius : 26,
        borderWidth : 1,
        fontSize: 19,
        textAlign: 'center',

        width : fw * .4,
        marginTop : 5,
        marginBottom: 10,
        borderColor : '#eee'
        }}
        ><Text style={{textAlign :'center'}}>ارفاق صورة</Text></View>

        <View style={{
          position : 'relative',
          marginTop : 15,
        }}><Text>Or</Text></View>
<View
        style={{

        padding : 9,
        borderRadius : 26,
        borderWidth : 1,
        fontSize: 19,
        width : fw * .4,
        marginTop : 5,
        marginBottom: 10,
        textAlign: 'center',

        borderColor : '#eee'
        }}
        ><Text style={{textAlign :'center'}}>ارفاق فيديو</Text></View>

        </View>
        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>


        <TextInput style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          textAlign: 'center',

          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#eee'
        }} placeholder="تحديد موعد" />
        
        </View>


        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>


        <TextInput style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          textAlign: 'center',

          marginTop : 5,
          marginBottom: 10,
          borderColor : '#eee'
        }} placeholder="كود الخصم" />
        
        </View>

<View style={{
       justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 30,
}}>

        <View style={{
          borderRadius : 26,
          borderColor : '#eee',
          backgroundColor : '#cd8d2d',
          padding: 12,
          width : fw * .5,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
        <Text style={{color : '#fff', fontSize: 16}}>ارسال</Text>
</View>
</View>


        </ScrollView>

        </ScrollView>
{/* 
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
          </View>
          </View>
         */}


        
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