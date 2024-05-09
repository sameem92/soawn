
import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'
import { Firebase_Update } from '../assets/Functions';
import {Actions} from 'react-native-router-flux';



export default class ChangePassword extends Component {
    state = {
        Email : this.props.Email,
        needwork : this.props.needwork,
        password : null,
        repassword : null,
    }

    resetPassword = () => {


        if (this.state.password != null && this.state.repassword != null) {

            if (this.state.password == this.state.repassword) {

                Firebase_Update(this.state.needwork == false ? 'Freelancer_users' : 'normal_users', ['Email', "==", this.state.Email], {
                    Password : this.state.password,
                }, (d) => {
                    Actions.Controlling_EN({email : this.state.Email, 
                        Type_  : this.state.needwork == true ? 'user' : 'Freelancer'
                    });

                });



            }

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
        }}>{Store.getState().AppSetState.lang == "EN" ?"Set New PASSWORD"  : 'جدد الرقم السري'}</Text>
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
          flexDirection : 'column',
          justifyContent: 'center',
          alignItems: 'center',
        
      }}>

<TextInput secureTextEntry={true} onChange={(d) => this.state.password = d.nativeEvent.text} style={{

padding : 9,
borderRadius : 26,
borderWidth : 1,
fontSize: 19,
width : fw * .8,
marginTop : 5,
marginBottom: 10,
borderColor : '#aaa'
}} placeholder={ Store.getState().AppSetState.lang == "EN" ? "New password" : 'الرقم السري الجديد'} />

<TextInput secureTextEntry={true} onChange={(d) => this.state.repassword = d.nativeEvent.text} style={{

padding : 9,
borderRadius : 26,
borderWidth : 1,
fontSize: 19,
width : fw * .8,
marginTop : 5,
marginBottom: 10,
borderColor : '#aaa'
}} placeholder={Store.getState().AppSetState.lang == "EN" ?"New RePassword" : 'اعادة كتابة الرقم السري'} />

<TouchableWithoutFeedback onPress={() =>{
    this.resetPassword()
  }}>

        <View style={{
          borderRadius : 26,
          borderColor : '#eee',
          backgroundColor : '#cd8d2d',
          padding: 12,
          width : fw * .8,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
        <Text style={{color : '#fff', fontSize: 16}}>{Store.getState().AppSetState.lang == "EN" ?"RESET PASSWORD" : 'استرجاع'}</Text>
</View>
</TouchableWithoutFeedback>

      </View>

      </View>
    )
  }
}
