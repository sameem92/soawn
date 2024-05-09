

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableWithoutFeedback, ScrollView, Animated, TextInput, Easing} from 'react-native';
import { Icon, Input,CheckBox, Rating} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import CustemarOrders__ from './custemarOrders__';


import {Firebase_Update} from '../assets/Functions';

import { FirebaseFileUrl } from '../assets/Functions';



fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

class Myorders extends Component {
    state = {
      orders_info_state_1 : [],
      orders_info_state_2 : [],
      orders_info_state_0 : [],
  
    }
    componentWillMount = () => {
  
    
        window.XMLHttpRequest = window.tempXMLHttpRequest;
  
      Email = this.props.Email;
    
  
  
  
  
      FirebaseApp.firestore().collection('ActiveWorks').where("From" , "==", Email).where("State", "==", "1").onSnapshot((d) => { // state = loading
  
        console.log(d);
  
        orders = d.docs;
  
        this.state.orders_info_state_1 = [];
  
        for (var i in orders) {
          order = orders[i]._document.data.value();
          this.state.orders_info_state_1.push(order);
  
        }
        this.setState({})
  
      })
  
  
      FirebaseApp.firestore().collection('ActiveWorks').where("From" , "==", Email).where("State", "==", "2").onSnapshot((d) => { // state = work accept and he/she come
  
        console.log(d);
  
        orders = d.docs;
  
        this.state.orders_info_state_2 = [];
  
        for (var i in orders) {
          order = orders[i]._document.data.value();
          this.state.orders_info_state_2.push(order);
  
        }
        this.setState({})
  
      })
  

      FirebaseApp.firestore().collection('ActiveWorks').where("From" , "==", Email).where("State", "==", "Close").onSnapshot((d) => { // work unaccept from freelancer
  
        console.log(d);
  
        orders = d.docs;
  
        this.state.orders_info_state_0 = [];
  
        for (var i in orders) {
          order = orders[i]._document.data.value();
          this.state.orders_info_state_0.push(order);
  
        }
        this.setState({})
  
      })
  
  
    }
    
    
  
      render () {
  
        return <View style={{
    flexDirection : 'column',
    padding : 5,
    alignItems :'center',
    justifyContent :'center'
  }}>
   
  
    {this.state.orders_info_state_1.map((d) => {
      console.log(d);
      return <CustemarOrders__ data={d} />
    })}
  
    {this.state.orders_info_state_2.map((d) => {
      console.log(d);
      return <CustemarOrders__ data={d} />
    })}
  
    {this.state.orders_info_state_0.map((d) => {
      console.log(d);
      return <CustemarOrders__ data={d} />
    })}
    
  
  
  
  
  </View>
    
  }
  
  
  
  
  
  }

export default class ListOrders extends Component {

    

    state = {
        Animated_Rate_work :  new Animated.Value(-260),
    
    
        rateCustomer: 3,
        SalaryCustomer : 0,
        infoAboutWorkCustomer : 'Nothing To say',
    }


    SendRateWork = () => {
        var id = Store.getState().AppSetState.orderFocus_id
        
        Firebase_Update('ActiveWorks', ["Id", "==", id], {
            needwork_give_price: `${this.state.SalaryCustomer}`,
          needwork_give_info_about_work: `${this.state.infoAboutWorkCustomer}`,
          needWork_give_rate : `${this.state.rateCustomer}`,
          State : "DoneWork",
        }, (d) => {

          FirebaseApp.firestore().collection('ActiveWorks').where("Id", "==", id).onSnapshot((data) => {

            if (data.empty == true) return;
            console.log('Here !!');
    
            workInfo = data.docs[0]._document.value();
            freelancerEmail = workInfo.To;

            FirebaseApp.firestore().collection('Freelancer_users').where("Email", "==", freelancerEmail).get().then((data2) => {
              console.log(data2);
              if (data2.empty == true) return;
              console.log('Here 2!!2');

              freelancerinfo = data2.docs[0]._document.value();
    
              freelacnerRate = JSON.parse(freelancerinfo.Rate);
    
    
              
              freelacnerRate.push(`${this.state.rateCustomer}`);
              
              console.log(freelacnerRate);
    
              Firebase_Update('Freelancer_users', ["Email", "==", freelancerinfo.Email], {
                Rate : JSON.stringify(freelacnerRate),
              }, (success) =>  {
                this.DownRateDown();
              })            
            })
    
          
          
          });
  
        })
      }
    upRateUp = () => {
        Animated.timing(this.state.Animated_Rate_work, {
          toValue: 0,
          duration : 600,
          easing: Easing.bounce,
        }).start();
      }
  
  
      DownRateDown = () => {
        Animated.timing(this.state.Animated_Rate_work, {
          toValue: -260,
          duration : 600,
        }).start();
      }



    componentWillMount = () => {
   

      Store.dispatch({
        type : 'addState',
        tag: 'upRateUp',
        tagValue : this.upRateUp,
      })
      Store.dispatch({
        type : 'addState',
        tag: 'DownRateDown',
        tagValue : this.DownRateDown,
      })

      Store.dispatch({
        type : 'addState',
        tag: 'orderFocus_id',
        tagValue : null,
      })
    }
    
  render() {
    return (
        <View style={{
            
          flex : 1,
        }}>
      
        <ImageBackground style={{width: '100%',
       height: fh * .4, 

      
      }} source={require('./assets/2.png')}>
        <View style={{
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
        }}>{Store.getState().AppSetState.lang == "EN"  ? "List Orders" : 'قائمة الطلبات' }</Text>
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
    alignContent : 'center',
    alignItems : 'center',
}}>
<Text style={{
      color : '#000',
     
      fontSize : 21,
    }}>{Store.getState().AppSetState.lang == "EN"  ? "Orders" : 'الطلبات' }</Text>
</View>
      <ScrollView  style={{
         
         overflow: 'scroll'
     }}>


      <Myorders Email={this.props.Email} />






      </ScrollView>

      <Animated.View style={{
        width: fw,
        borderRadius : 8,
        backgroundColor : '#fff',
        elevation: 5,
        height : 260,
        position: 'absolute',
        bottom : this.state.Animated_Rate_work,
        left: 0,
        padding: 10,
      }}>
        <Text style={{
          fontSize : 19,
        }}>{Store.getState().AppSetState.lang == "EN" ? "Rate Work" : 'قيم العمل' }</Text>
        <View style={{
          flexDirection : 'column'
        }}>

        <TextInput 
        onChange={(d) => {
          this.state.SalaryCustomer = d.nativeEvent.text;
        }}
        style={{
          borderWidth :1 ,
          borderColor : '#eee',
          borderRadius: 8,
          marginTop: 8,
          textAlign: Store.getState().AppSetState.lang == "EN" ? 'left' : 'right',
         marginBottom: 8,
          padding : 4,
        }} keyboardType="number-pad" placeholder= {Store.getState().AppSetState.lang == "EN" ?"Salary" : 'الثمن'} />
        <TextInput 
         onChange={(d) => {
          this.state.infoAboutWorkCustomer = d.nativeEvent.text;
        }}
        style={{
          borderWidth :1 ,
          borderColor : '#eee',
          borderRadius: 8,
          textAlign: Store.getState().AppSetState.lang == "EN" ? 'left' : 'right',
          padding : 4,
          marginTop: 8,
         marginBottom: 8,
        }}
        multiline={true}
        maxLength={254}
        placeholder={ Store.getState().AppSetState.lang == "EN" ? "Info About Work" : 'معلومات عن العمل' } />

       <View style={{
         flexDirection: 'row',
         justifyContent : 'space-between',
         alignItems : 'center',
         marginTop: 8,
         marginBottom: 8,
         
       }}>
       <Text> {Store.getState().AppSetState.lang == "EN" ? "Rate Your Freelancer" : 'قيم المهني' } </Text>
       <Rating onFinishRating={
         (d) => {
          this.state.rateCustomer = d.toString();
         }
       }  imageSize={14} />
       </View>

        <TouchableWithoutFeedback onPress={this.DownRateDown}>
            
          <View style={{
            backgroundColor : '#ff4444',
            borderRadius :8,
            textAlign : 'center',
            marginRight:1,
            width :'100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{ Store.getState().AppSetState.lang == "EN" ? "Dismiss" : "الغاء"}</Text></View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.SendRateWork}>
          
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
          }}><Text style={{color: '#fff'}}> { Store.getState().AppSetState.lang == "EN" ? "Send" : "ارسال"}</Text></View>
            </TouchableWithoutFeedback>
        </View> 
      </Animated.View>
     
      </View>
    )
  }
}
