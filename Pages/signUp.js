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


import {Actions} from 'react-native-router-flux'

fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

export default class SignUp_EN extends Component {
  state = {
    checked    : false,
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
            "ID" :unqid
          },
          () =>{ 
            Actions.Thankspage_EN({Email :this.state.Email, Type_ : 'user' })
          },
          () =>  {
          
            this.pushError('error')
            this.setState({
              loading : false,
            });
          },
          true,
          ["Email", "==", this.state.Email],
          () =>{
            this.pushError('some one have same email')
            this.setState({
              loading : false,
            });
          },

          );





        } else {
          // password and repassword not equal 
          this.pushError('password and repassword not equal')
        }
      } else {
        // error complete your information
        this.pushError('error complete your information !! must name,email,password more than 4 letters')

      }

  }
  render() {
    return (
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
        }}>REGISTER</Text>
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
            right : 40,
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
            right : 40,
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
        }} placeholder="Email" />
        
        </View>

        <CheckBox
          title="I'll receive newsletter & updates"
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
            right : 40,
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
        }} placeholder="Password" />
        
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
            right : 40,
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
        }} placeholder="RE-Password" />
        
        </View>


        <View style={{
       justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 30,
}}>
   <TouchableWithoutFeedback onPress={
          // () => Actions.Thankspage_EN()
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
        <Text style={{color : '#fff', fontSize: 16}}>CONTINUE</Text>
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
          
          
        }}><Text style={{textAlign: 'center'}}>ِAlready have an account? Sign In</Text>
        </View>

    </ScrollView>
    );
  }
}

