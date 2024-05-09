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
import { Icon } from 'react-native-elements'
import Store from '../assets/store/store';



import { Actions } from 'react-native-router-flux';

import { Log } from '../assets/Functions';

fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;
export default class Login_EN extends Component {

  componentWillMount = () => {
    Store.dispatch({
      type : "addState",
      
        tag : 'ErrorLog',
        tagValue : [false, ''],
      
    })
  }
  

  state = {
    email : null,
    password : null,

  }
  
  
  login_check  = () => {

    if (this.props.needwork == false ){ 
      var coll = "Freelancer_users"
    } else {
      coll = "normal_users";
    }

    console.log(coll)

    if (this.state.email !== null || this.state.password !== null) {
      console.log('Test is done !')


      Log(coll, ['Email', "==", this.state.email], ["Password", "==", this.state.password], (data) => {

        notfound = data.empty;

      
        if (notfound) {

          Store.dispatch({
            type : "addState",
            
            tag : 'ErrorLog',
            tagValue : [true, 'البريد او الرقم السري خطأ'],
            
          })
              this.setState({
              })

        } else {

          Store.dispatch({
            type : "addState",
            
            tag : 'ErrorLog',
            tagValue : [false, ''],
            
          })

          
          EmailValus  =data.docs[0]._document.value();

          console.log(EmailValus)


          if (EmailValus.Admin == "true") {
            Actions.Controlling_EN({ email:  this.state.email, Type_ : "Admin" })
          } else {

          
          if (EmailValus.Block == "false") {

            Actions.Controlling_EN({ email:  this.state.email, Type_ : this.props.needwork == false ? 'Freelancer' : 'user' })
          } else {

            Store.dispatch({
              type : "addState",
              
              tag : 'ErrorLog',
              tagValue : [true, ' تم خظر هذا البريد'],
              
            })
                this.setState({
                })

          }
          
        }



          
              


        }
      })

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
        }}>تسجيل دخول</Text>
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
        }}>سجل دخول للمتابعة</Text>
        </View>
      </ImageBackground>
      

      
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
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
            left : 10,
          }}>
          <Icon
            name='user'
            type='font-awesome'
            color='#aaa'
            onPress={() => console.log('hello')} /></View>

        <TextInput onChange={(d) => this.state.email = d.nativeEvent.text} style={{

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
            left : 10,
          }}>
          <Icon
            name='key'
            type='font-awesome'
            color='#aaa'
            onPress={() => console.log('hello')} /></View>

        <TextInput secureTextEntry={true} onChange={(d) => this.state.password = d.nativeEvent.text} style={{

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
       justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 30,
}}>

<TouchableWithoutFeedback onPress={() => 

this.login_check()  
//Actions.Controlling_EN()
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
        <Text style={{color : '#fff', fontSize: 16}}>دخول</Text>
</View>
</TouchableWithoutFeedback>

        </View>
        <TouchableWithoutFeedback onPress={() => Actions.reset_EN( { needwork : this.props.needwork} )}>


        <View style={{
           justifyContent: 'center',
        alignItems: 'center',
        paddingTop : 15,
        }}>
          <Text style={{
            fontSize: 15
          }}>نسيت الرقم السري</Text>
        </View>
        </TouchableWithoutFeedback>
        
        
     
        <TouchableWithoutFeedback onPress={() => {
            // console.log(this.props.needwork)
            if (this.props.needwork == true ){

                Actions.SignUp_EN() 
             } else {
                Actions.SignUp2_EN()
             }
        } }>

        <View style={{
           justifyContent: 'center',
        alignItems: 'center',
        paddingTop : 25,
        }}>
          <Text style={{
            fontSize: 15,
            fontWeight : 'bold'
            
          }}>لا تمتلك حساب؟ سجل الان</Text>
        </View>

        </TouchableWithoutFeedback>
      </View>

      {Store.getState().AppSetState.ErrorLog[0] == true ? <View style={{
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
          textAlign : 'center'}}>{Store.getState().AppSetState.ErrorLog[1]}</Text>

        </View> : <View></View>}

      </ScrollView>
    );
  }
}

