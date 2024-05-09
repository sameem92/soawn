/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, ScrollView} from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'


fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

export default class SERVS_AR extends Component {
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
            onPress={() => console.log('hello')} />
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

        <View style={{
          alignItems: 'flex-end',
          flexDirection : 'row-reverse',
          justifyContent: 'space-between'
        }}>
          




      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right : 20,
        top : -95,
      }}
      >
          <ImageBackground source={require('./assets/SERV1.png')} style={{
            width: 120,
            height: 120,
          }}>
          </ImageBackground>
          <Text>سباكة</Text>
      </View>



      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left : 40,
        top : -35,
      }}
      >
          <ImageBackground source={require('./assets/SERV5.png')} style={{
            width: 120,
            height: 120,
          }}>
          </ImageBackground>
          <Text>مكيفات</Text>
      </View>



     
      


      </View>
    
      <View style={{
          alignItems: 'flex-end',
          flexDirection : 'row',
          justifyContent: 'space-between'
        }}>
          




      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left : 40,
        top : -35,
      }}
      >
          <ImageBackground source={require('./assets/SERV2.png')} style={{
            width: 120,
            height: 120,
          }}>
          </ImageBackground>
          <Text>كهرباء</Text>
      </View>



      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right : 10,
        top : -85,
      }}
      >
          <ImageBackground source={require('./assets/SERV3.png')} style={{
            width: 120,
            height: 120,
            
          }}>
          </ImageBackground>
          <Text> هواتف {"\n"} وحواسيب</Text>
      </View>



     
      


      </View>

      <View style={{
          // alignItems: 'flex-start',
          // flexDirection : 'row',
          // justifyContent: ''
        }}>
          




      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right : -50,
        top : -115,
      }}
      >
          <ImageBackground source={require('./assets/SERV4.png')} style={{
            width: 120,
            height: 120,
          }}>
          </ImageBackground>
          <Text>دهان واصباغ</Text>
      </View>



    

     
      


      </View>
          
</ScrollView>

          {/* <View
          style={{
            // justifyContent : 'space-evenly',
            // alignItems :'stretch',
            flexDirection : 'row-reverse',
            position: 'absolute',
            flex : 1,
            bottom : 5,
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
          </View> */}
        


        
    </View>
    );
  }
}

