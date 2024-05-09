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
import { Icon, Input } from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

export default class Code_EN extends Component {
  state ={
    i1  :null,
    i2  :null,
    i3  :null,
    i4  :null,
    Email : this.props.Email,
    needwork : this.props.needwork,
    Code : null,
    error  :false,
  }

  componentWillMount() {

    this.SendCode();

  }

  SendCode = () => {
    
    var code = Math.round(Math.random() * 9) + "" + Math.round(Math.random() * 9) + "" + Math.round(Math.random() * 9) + "" + Math.round(Math.random() * 9); 
    
    fetch(`https://qandil-afa.000webhostapp.com/reset/reset/reset_acc.php?email=${this.state.Email}&Code=${code}`).then((res) => res.json()).then((data) => {
      
    if (data.state == "success") {

      this.state.Code = code == data.code ? code : data.code;

    }
      
    })
  }

  DoneReset = () => {
    getcode = this.state.i1 +  "" + this.state.i2 +  "" + this.state.i3 +  "" +this.state.i4;

    console.log(getcode);
    console.log(this.state.Code);

    if (getcode == this.state.Code) {
      Actions.ChangePassword({Email : this.state.Email, needwork: this.state.needwork})

    } else {
      this.setState({
        error : true,
      })
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
        }}>VERIFY CODE</Text>
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
        justifyContent :'center',
        alignItems :'center',
      }}>

        <View style={{
          justifyContent: Store.getState().AppSetState.lang == "EN" ?'flex-start' : 'flex-start',
          alignItems: Store.getState().AppSetState.lang == "EN" ?'flex-start' : 'flex-end',
          
        }}>
        <Text>{Store.getState().AppSetState.lang == "EN" ?"4 digits code" : 'اربع ارقام'}</Text>
        </View>
        <View style={{
          flexDirection : 'row',
          marginTop : 25,
        }}>
          <TextInput 
          onChange={ (d) => this.state.i1 = d.nativeEvent.text}
          autoFocus={true}
          
          maxLength={1.0} style={{
            borderWidth : 1,
            height : 50,
            width : 50,
            textAlign : 'center',
            borderRadius : 50,
            padding : 6,
            borderColor : '#aaa',
            color : 'orange',
            fontSize : 22,
            margin : 5,

            
          }} keyboardType="number-pad" />
          <TextInput
          onChange={ (d) => this.state.i2 = d.nativeEvent.text}

          
           maxLength={1.0} style={{
            borderWidth : 1,
            height : 50,
            width : 50,
            textAlign : 'center',
            borderRadius : 50,
            padding : 6,
            borderColor : '#aaa',
            color : 'orange',
            fontSize : 22,
            margin : 5,

            
          }} keyboardType="number-pad" />
          <TextInput
          onChange={ (d) => this.state.i3 = d.nativeEvent.text}


           maxLength={1.0} style={{
            borderWidth : 1,
            height : 50,
            width : 50,
            textAlign : 'center',
            borderRadius : 50,
            padding : 6,
            borderColor : '#aaa',
            color : 'orange',
            fontSize : 22,
            
            margin : 5,

          }} keyboardType="number-pad" />
          <TextInput
          onChange={ (d) => this.state.i4 = d.nativeEvent.text}


          
           maxLength={1.0} style={{
            borderWidth : 1,
            height : 50,
            width : 50,
            textAlign : 'center',
            borderRadius : 50,
            padding : 6,
            borderColor : '#aaa',
            color : 'orange',
            fontSize : 22,
            margin : 5,
            
          }} keyboardType="number-pad" />
        </View>
          
      </View>
      <TouchableWithoutFeedback onPress={() => this.SendCode()}>

      <View style={{
        justifyContent : Store.getState().AppSetState.lang == "EN" ? 'flex-start' : 'flex-end',
        alignItems : Store.getState().AppSetState.lang == "EN" ?'flex-start' : 'flex-end',
        paddingRight : 25,
        margin:25,
      }}>
        <Text>{Store.getState().AppSetState.lang == "EN" ?"Send Code Again" : 'ارسال مجددا'}</Text>
      </View>
      </TouchableWithoutFeedback>

      <View style={{
       justifyContent: 'center',
        alignItems: 'center',
        marginTop : 50
        // paddingLeft: 30,
}}>
{ this.state.error == true ? 
  <View style={{
    justifyContent : 'center',
  }}><Text style={{
    color : '#ff4444'
  }}>{Store.getState().AppSetState.lang == "EN" ? "Your Code Is UnCorrect!" : 'الكود خطأ'}</Text></View> : <View></View>
}
<TouchableWithoutFeedback onPress={() => {
  this.DoneReset()
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
        <Text style={{color : '#fff', fontSize: 16}}>{Store.getState().AppSetState.lang == "EN" ? "CONFIRM CODE" : 'تاكيد'}</Text>
</View>
</TouchableWithoutFeedback>
</View>

    </View>
    );
  }
}

