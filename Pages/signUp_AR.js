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
import {AddFunc} from '../assets/Functions';

import {Actions } from 'react-native-router-flux';

fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

export default class SignUp_AR extends Component {
  state = {
    checked : false,
    FullName   : null,
    Email      : null,
    Password   : null,
    rePassword : null,
    alertErrorMessage : 'Unknown Error!',
    visableAlertError: false,

    loading : false,
  }
 

  pushError = (message) => {
      this.setState({
        alertErrorMessage : message,
        visableAlertError : true,
      })
  }
 
  
  SignUp_func = () => {
    
    if (
      this.state.FullName   !== null      && this.state.FullName.length > 4     &&
      this.state.Email      !== null      && this.state.Email.length > 4        &&
      this.state.Password   !== null      && this.state.Password.length > 4     &&
      this.state.rePassword !== null      && this.state.rePassword.length > 4 
      ) {
        if (this.state.Password === this.state.rePassword) {
          this.setState({
            loading : true,
          });
          var unqid = `id_${Math.random() * 100000}`;
          
          AddFunc(
            "normal_users",{
            "FullName" : this.state.FullName,
            "Email" : this.state.Email,
            "Password" : this.state.Password,
            "Block" : 'false',
            "ID" :unqid,
          },
          () =>  { 
            Actions.Thankspage_AR({Email :this.state.Email, Type_ : 'user' })
          },
          () =>  {
            this.pushError('خطأ برجاء اتاكد من اتصالك بالشبكة')
            this.setState({
              loading : false,
            });
          
          },
          
            true,
          ["Email", "==", this.state.Email],
          () => {
            this.pushError('يوجد بريد بافعل بنفس الاسم')
            this.setState({
              loading : false,
            });
          },

          );



        } else {
          // password and repassword not equal 
          this.pushError('الرقم السري ليس متطابق')
        }
      } else {
        // error complete your information
        this.pushError('يجيب ان تكمل البينات و ان يكون كل البينات تتجاوز الاربع حروف')

      }

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
            name='ellipsis-v'
            type='font-awesome'
            color='#fff'
            onPress={() => console.log('hello')} />
         <Icon
            name='angle-left'
            type='font-awesome'
            color='#fff'
            onPress={() => Actions.pop()} />
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
        }}>الاشتراك</Text>
           <TouchableWithoutFeedback onPress={( ) => Actions.EnterPage()}>
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
            flex : 1,
            
            // justifyContent: 'flex-end',
            // width: fw ,
            height: 50,
            // backgroundColor : 'blue',
            zIndex : 99,

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

        <TextInput onChange={(value) => this.state.FullName = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="الاسم كامل" />
        
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
            flex : 1,
            
            // justifyContent: 'flex-end',
            // width: fw ,
            height: 50,
            // backgroundColor : 'blue',
            zIndex : 99,

            left:40, 
            // marginTop : 15,
            // left : 0,
            // left : 40,
          }}>
          <Icon
            name='envelope'
            type='font-awesome'
            color='#aaa'
            onPress={() => console.log('hello')} /></View>

        <TextInput onChange={(value) => this.state.Email = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="الايميل" />
        
        </View>

        <CheckBox
          title="اود معرفة اخر الاخبار والتخديثات"
          center
          containerStyle={{ borderWidth : 0, backgroundColor : 'transparent'}}
          checkedColor="red"
          checked={this.state.checked}
          onPress={() => {
            if (this.state.checked == true) {
              this.setState({
                checked: false
              })
            } else {
              this.setState({
                checked: true
              })
            }
          }}
        />

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
            flex : 1,
            
            // justifyContent: 'flex-end',
            // width: fw ,
            height: 50,
            // backgroundColor : 'blue',
            zIndex : 99,

            left:40, 
            // marginTop : 15,
            // left : 0,
            // left : 40,
          }}>
          <Icon
            name='key'
            type='font-awesome'
            color='#aaa'
            onPress={() => console.log('hello')} /></View>

        <TextInput secureTextEntry={true} onChange={(value) => this.state.Password = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="الرقم السري" />
        
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
            flex : 1,
            
            // justifyContent: 'flex-end',
            // width: fw ,
            height: 50,
            // backgroundColor : 'blue',
            zIndex : 99,

            left:40, 
            // marginTop : 15,
            // left : 0,
            // left : 40,
          }}>
          <Icon
            name='key'
            type='font-awesome'
            color='#aaa'
            onPress={() => console.log('hello')} /></View>

        <TextInput secureTextEntry={true} onChange={(value) => this.state.rePassword = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="اعد الرقم السري" />
        
        </View>


        <View style={{
       justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 30,
}}>

<TouchableWithoutFeedback onPress={
          // () => Actions.Thankspage_AR()
          this.state.loading == false ? this.SignUp_func : () => {}
        }>

        <View style={{
          borderRadius : 26,
          borderColor : '#eee',
          backgroundColor : '#cd8d2d',
          padding: 12,
          width : fw * .8,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
        <Text style={{color : '#fff', fontSize: 16}}>استمرار</Text>
</View>
</TouchableWithoutFeedback>

        </View>

        {this.state.visableAlertError == true ? <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft : fw * .15,
          marginTop: 25,

        }}>

        <Text style={{
          fontSize : 14,
          width : fw * .7,
          color : '#ff4444',
          borderWidth  : 1,
          borderColor : "#ff4444",
          textAlign : 'center'}}>{this.state.alertErrorMessage}</Text>

        </View> : <View></View>}
     <View style={{
          marginTop : 10,
          
          
        }}><Text style={{textAlign: 'center'}}>ِلديك حساب؟ سجل دخولك</Text>
        </View>
    </View>
    );
  }
}

