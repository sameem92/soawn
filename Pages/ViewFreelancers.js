import React, { Component } from 'react'
import {View, Text, Dimensions, ImageBackground, TouchableWithoutFeedback, ScrollView, Animated,Picker, Easing, TextInput} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import FirebaseApp from '../assets/FirebaseApp';

import Orders__ from './Orders__';

import { Actions } from 'react-native-router-flux';

import {Firebase_Update,AddFunc } from '../assets/Functions';

import { FirebaseFileUrl } from '../assets/Functions';

import { Icon, Input,CheckBox,Rating, AirbnbRating} from 'react-native-elements'

function GetRate (array) {
  console.log(array);
  
  arr = JSON.parse(array);

  if (arr.length == 0) return 1;


  l = arr.length;
  t = 0;
  for (var i in arr) {
    t = t + +arr[i];
  }

  return [parseInt(t / l), l]; 
}



const Profile__ = (userinfo, DATA) => {

  SendOrderTo = (Email) => {
    data =  new Date().toLocaleString();
 

    AddFunc('ActiveWorks', {
      Address : JSON.stringify(DATA.Location),
      Date : data.toString(),
      Freelancer_give_Price_get : 'Null',
      Freelancer_give_about_his_work : 'Null',
      Freelancer_give_rate : 'Null',
      From : /* 'Test@test.com', */ DATA.data.Email,
      To : Email,
      Id : `ID${Math.random() * 1000000}__`,
      State: '1',
      Time : 'Null',
      Title : DATA.Title,
      Type: DATA.data.type,
      info : DATA.details,
      needWork_give_rate : 'Null',
      needwork_give_info_about_work : 'Null',
      needwork_give_price : 'Null',
    }, (d) => {
      Actions.pop();
    }, (e) => {
      Actions.pop();
    });

  }
      
    var profileImage = FirebaseFileUrl(userinfo.ProfileImage);



    return <View style={{
        backgroundColor : '#fff',
          // justifyContent :'center',
          // alignItems :'center',
          PaddingTop : 25,
          PaddingBottom : 25,
          
        
          flexDirection : 'row',
    }}>

      <ImageBackground style={{
          width: 100,
          height : 100,

      }} source={{ uri : profileImage.toString() }} />
  <View style={{
    flexDirection : 'column',

  }}>

    
    <View style={{
      flexDirection : 'row',
    }}>

      <Text style={{
        color : '#000',
        fontSize : 19,
        paddingTop : 5,
        paddingLeft : 5,
      }} >{userinfo.FullName}</Text>

      <Text style={{
        color : userinfo.ActiveState == 1 ? "#00C851" : '#ff4444',
        fontSize : 13,
        paddingLeft : 5,
        paddingTop : 10,
      }} >{userinfo.ActiveState == 1 ? Store.getState().AppSetState.lang == "EN" ? '(Active)' : "(نشط)" : Store.getState().AppSetState.lang == "EN" ? '(Not active)' : "(غير نشط)"}</Text>
    </View>
     <View style={{
       flexDirection : 'row',
       justifyContent : 'space-evenly',
     }}>

      {/* <Text style={{
        color : '#ddd',
        fontSize : 13,
        paddingLeft : 5,
      }} >{userinfo.Email}</Text> */}

    
            <Rating
            startingValue={GetRate(userinfo.Rate)[0]}
          imageSize={10}
          style={{
            paddingTop: 5,
            paddingLeft: 5,
          }}
        readonly
      />
      <Text>({GetRate(userinfo.Rate)[1]})</Text>
     </View>

     <TouchableWithoutFeedback onPress={() => this.SendOrderTo(userinfo.Email)}>
          
          <View style={{
            backgroundColor : '#00C851',
            borderRadius :8,
            marginLeft:1,
            marginTop: 4,
            textAlign : 'center',
            width :'100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ? "Send" : 'ارسال'}</Text></View>
            </TouchableWithoutFeedback>

  </View>
      


    </View> 
    
}

export default class ViewFreelancers extends Component {
  state = {
    Location : this.props.Location,
    Title: this.props.Title,
    details: this.props.details,
    data : this.props.data,
    freelacners: [],

  }
  componentWillMount = () => {
    
    window.XMLHttpRequest = window.tempXMLHttpRequest; // for not make accented with other XMLHttpRequest
    FirebaseApp.firestore().collection('Freelancer_users').where('Skills', '==',`${this.state.data.type}` ).where('Allow', '==',`1` ).onSnapshot((d) => {
        if (d.empty == true) return;


        this.state.freelacners = [];

        for (i in  d.docs) {
          this.state.freelacners.push(d.docs[i]._document.value());
        }


        this.setState({  
        })
    })

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
        }}>{Store.getState().AppSetState.lang == "EN" ? "Choose One" : 'اختر واحد'}</Text>
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


      {
        this.state.freelacners.length != 0 ? 
        
        this.state.freelacners.map((d) => {

          return Profile__(d, this.state)

        })

        
        :

        <View><Text>{Store.getState().AppSetState.lang == "EN" ?"Loading" : 'جاري التحميل'}</Text></View>
      }
        
      </ScrollView>
    )
  }
}
