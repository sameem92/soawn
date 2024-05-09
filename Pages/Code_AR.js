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
import { Icon, Input } from 'react-native-elements'


fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

export default class Code_AR extends Component {
  state ={
    i1  :true,
    i2  :false,
    i3  :false,
    i4  :false,

  }
  nextfocus = (index) => {
    
    console.log(index);

    if (index == 1){
      this.setState({i2  : true, i1 : false})
    }
    if (index == 2){
      this.setState({i3  : true, i2 : false})
    }
    if (index == 3){
      this.setState({i4  : true, i3 : false})
    }
    if (index == 4){
      this.setState({i4 : false})
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
        }}>التحقق من الرمز</Text>
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
        justifyContent :'center',
        alignItems :'center',
      }}>

        <View>
        <Text>4 ارقام للرمز</Text>
        </View>
        <View style={{
          flexDirection : 'row-reverse',
          marginTop : 25,
        }}>
          <TextInput 
          onChange={ () => this.nextfocus(1)}
          autoFocus={this.state.i1}
          
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
          onChange={ () => this.nextfocus(2)}

          autoFocus={this.state.i2}
          
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
          onChange={ () => this.nextfocus(3)}

          autoFocus={this.state.i3}
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
          onChange={ () => this.nextfocus(4)}

          autoFocus={this.state.i4}
          
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
      <View style={{
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        paddingRight : 25,
        margin:25,
      }}>
        <Text>ارسال الرمز مرة اخري</Text>
      </View>

      <View style={{
       justifyContent: 'center',
        alignItems: 'center',
        marginTop : 50
        // paddingLeft: 30,
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
        <Text style={{color : '#fff', fontSize: 16}}>تأكيد الرمز</Text>
</View>
</View>

    </View>
    );
  }
}

