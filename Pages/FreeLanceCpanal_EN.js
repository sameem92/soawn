import React, { Component } from 'react'
import {View, Text, Dimensions, ImageBackground, TouchableWithoutFeedback, ScrollView, Animated,Picker, Easing, TextInput} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

import FirebaseApp from '../assets/FirebaseApp';

import Orders__ from './Orders__';

import { Rating, AirbnbRating } from 'react-native-elements';

import {Firebase_Update} from '../assets/Functions';

import { FirebaseFileUrl } from '../assets/Functions';




import Store  from '../assets/store/store';

fw = Dimensions.get('window').width
fh = Dimensions.get('window').height

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



function ActiveState (Id, State) {

  StateCode = State === true ? "1" : "0";
  
  Firebase_Update('Freelancer_users', ["ID", "==", Id], {ActiveState : StateCode});



}

const Profile__ = ({userinfo}) => {
  if (userinfo !== null)  {
      
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
      <TouchableWithoutFeedback onPress={() => ActiveState(userinfo.ID, userinfo.ActiveState == "1" ? false : true )}>

      <Text style={{
        color : userinfo.ActiveState == 1 ? "#00C851" : '#ff4444',
        fontSize : 13,
        paddingLeft : 5,
        paddingTop : 10,
      }} >{userinfo.ActiveState == 1 ? '(نشط)' : '(غير نشط)'}</Text>
      </TouchableWithoutFeedback>
    </View>
     <View style={{
       flexDirection : 'row',
       justifyContent : 'space-evenly',
     }}>

      <Text style={{
        color : '#ddd',
        fontSize : 13,
        paddingLeft : 5,
      }} >{userinfo.Email}</Text>

    
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
  </View>
      


    </View> 
    }

    return <View></View>
}




class Myorders extends Component {
  state = {
    orders_info_state_1 : [],
    orders_info_state_2 : [],
    orders_info_state_3 : [],
    orders_info_state_ClosefromCustomer : [],
    

  }
  componentWillMount = () => {

  


    Email = this.props.Email;
  




    FirebaseApp.firestore().collection('ActiveWorks').where("To" , "==", Email).where("State", "==", "1").onSnapshot((d) => {

      console.log(d);

      orders = d.docs;

      this.state.orders_info_state_1 = [];

      for (var i in orders) {
        order = orders[i]._document.data.value();
        this.state.orders_info_state_1.push(order);

      }
      this.setState({})

    })


    FirebaseApp.firestore().collection('ActiveWorks').where("To" , "==", Email).where("State", "==", "2").onSnapshot((d) => {

      console.log(d);

      orders = d.docs;

      this.state.orders_info_state_2 = [];

      for (var i in orders) {
        order = orders[i]._document.data.value();
        this.state.orders_info_state_2.push(order);

      }
      this.setState({})

    })


    FirebaseApp.firestore().collection('ActiveWorks').where("To" , "==", Email).where("State", "==", "3").onSnapshot((d) => {

      console.log(d);

      orders = d.docs;

      this.state.orders_info_state_3 = [];

      for (var i in orders) {
        order = orders[i]._document.data.value();
        this.state.orders_info_state_3.push(order);

      }
      this.setState({})

    })

    FirebaseApp.firestore().collection('ActiveWorks').where("To" , "==", Email).where("State", "==", "ClosefromCustomer").onSnapshot((d) => {

      console.log(d);

      orders = d.docs;

      this.state.orders_info_state_ClosefromCustomer = [];

      for (var i in orders) {
        order = orders[i]._document.data.value();
        this.state.orders_info_state_ClosefromCustomer.push(order);

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
  <Text style={{
    color : '#000',
   
    fontSize : 21,
  }}>{Store.getState().AppSetState.lang == "EN" ?"Works Orders" : 'الخدمات'}</Text>

  {this.state.orders_info_state_1.map((d) => {
    console.log(d);
    return <Orders__ data={d} />
  })}

  {this.state.orders_info_state_2.map((d) => {
    console.log(d);
    return <Orders__ data={d} />
  })}

  {this.state.orders_info_state_3.map((d) => {
    console.log(d);
    return <Orders__ data={d} />
  })}

  {this.state.orders_info_state_ClosefromCustomer.map((d) => {
    console.log(d);
    return <Orders__ data={d} />
  })}
  




</View>
  
}





}

export default class FreeLanceCpanal_EN extends Component {


    state = {
        userinfo : null,
        DropdownV : Array(24),
        
    Animated_accept_value  :  new Animated.Value(-220),

    Animated_Rate_work :  new Animated.Value(-260),

    AcceptOrderTime: '',
    AcceptOrderdate: '',


    rateCustomer: 3,
    SalaryCustomer : 0,
    infoAboutWorkCustomer : 'Nothing To say',


    };

    SendRateWork = () => {
      var id = Store.getState().AppSetState.orderFocus_id
      
      Firebase_Update('ActiveWorks', ["Id", "==", id], {
        Freelancer_give_Price_get: `${this.state.SalaryCustomer}`,
        Freelancer_give_about_his_work: `${this.state.infoAboutWorkCustomer}`,
        Freelancer_give_rate : `${this.state.rateCustomer}`,
        State : "DoneWork",
      }, (d) => {
        this.DownRateDown();
      })

     


    }

    upAcceptOrder = () => {
      Animated.timing(this.state.Animated_accept_value, {
        toValue: 0,
        duration : 600,
        easing: Easing.bounce,
      }).start();
    }


    DownAcceptOrder = () => {
      Animated.timing(this.state.Animated_accept_value, {
        toValue: -220,
        duration : 600,
      }).start();
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



    AcceptOrder = () => {
      var id = Store.getState().AppSetState.orderFocus_id
      
      Firebase_Update('ActiveWorks', ["Id", "==", id], {
        Time: `${this.state.AcceptOrderTime}, ${this.state.AcceptOrderdate}`,
        State : "2",
      }, (d) => {
        this.DownAcceptOrder();

      })
    
    }

    componentWillMount = () => {

      console.log(this)

      

      Store.dispatch({
        type : 'addState',
        tag: 'upAcceptOrder',
        tagValue : this.upAcceptOrder,
      })
      Store.dispatch({
        type : 'addState',
        tag: 'DownAcceptOrder',
        tagValue : this.DownAcceptOrder,
      })

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
  
  
      

 

        window.XMLHttpRequest = window.tempXMLHttpRequest; // for not make accented with other XMLHttpRequest
      FirebaseApp.firestore().collection('Freelancer_users').where('Email', '==', /* "qandilafa@gmail.com" */ this.props.Email ).onSnapshot((d) => {
          if (d.empty == true) return;


          userinfo = d.docs[0]._document.value();

          this.setState({
              userinfo : userinfo,
          })
      })
    }

    
    
  render() {
    return (
      <View style={{
        flex: 1,
      }}>

      <ScrollView style={{
        height : fh,
      }}>
      {
       this.state.userinfo !== null && userinfo.Allow == "0" ?  <View style={{
              backgroundColor : 'red',
              height : 50,
              alignItems : 'center',
              justifyContent : 'center'
          }}><Text style={{
              color : '#fff',
              fontSize : 16,

          }}>{Store.getState().AppSetState.lang == "EN" ?"Your Account not active from admin yet." : 'بريدك لم يتم الموافقة عليه من المدير بعد'}</Text></View> : <View></View>
      }


      <Profile__ userinfo={this.state.userinfo} />

      {this.state.userinfo !== null ? <Myorders Email={this.state.userinfo.Email} /> : <View></View>}

      

      </ScrollView>
      
      <Animated.View style={{
        width: fw,
        borderRadius : 8,
        backgroundColor : '#fff',
        elevation: 5,
        height : 220,
        position: 'absolute',
        bottom : this.state.Animated_accept_value,
        left: 0,
        padding: 10,
      }}>
        <Text style={{
          fontSize : 19,
        }}>{Store.getState().AppSetState.lang == "EN" ?"Choose the right time to go" : 'اختر الوقت المناسب'}</Text>
        <View style={{
          flexDirection : 'row'
        }}>

           <Dropdown
          containerStyle={{
            width: '40%'
          }}
        label='Time'
        overlayStyle={{
          height : 60,
        }}
        onChangeText={(d)=> {
          this.state.AcceptOrderTime = d;
        }}
        data={[
          {value : '1 AM'},
          {value : '2 AM'},
          {value : '3 AM'},
          {value : '4 AM'},
          {value : '5 AM'},
          {value : '6 AM'},
          {value : '7 AM'},
          {value : '8 AM'},
          {value : '9 AM'},
          {value : '10 AM'},
          {value : '11 AM'},
          {value : '12 AM'},
          {value : '1 PM'},
          {value : '2 PM'},
          {value : '3 PM'},
          {value : '4 PM'},
          {value : '5 PM'},
          {value : '6 PM'},
          {value : '7 PM'},
          {value : '8 PM'},
          {value : '9 PM'},
          {value : '10 PM'},
          {value : '11 PM'},
          {value : '12 PM'},
        ]}
      /> 

<Dropdown
          containerStyle={{
            width: '40%',
        flex: 1,

          }}
        label='Day'
        onChangeText={(d)=> {
          this.state.AcceptOrderdate = d;
        }}
        data={[
          {value : 'Today'},
          {value : 'Tomorrow'},
        ]}/>
        </View>
        <View style={{
          flexDirection : 'column',
        }}>
        <TouchableWithoutFeedback onPress={this.DownAcceptOrder}>
            
          <View style={{
            backgroundColor : '#ff4444',
            borderRadius :8,
            textAlign : 'center',
            marginRight:1,
            width :'100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Dismiss" : 'الغاء'}</Text></View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.AcceptOrder}>
          
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
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Accept" : 'الموافقة'}</Text></View>
            </TouchableWithoutFeedback>
        </View> 
      </Animated.View>



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
        }}>{Store.getState().AppSetState.lang == "EN" ?"Rate Work" : 'قيم العمل'}</Text>
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
         marginBottom: 8,
          padding : 4,
        }} keyboardType="number-pad" placeholder={Store.getState().AppSetState.lang == "EN" ? "Salary" : 'المبلغ'} />
        <TextInput 
         onChange={(d) => {
          this.state.infoAboutWorkCustomer = d.nativeEvent.text;
        }}
        style={{
          borderWidth :1 ,
          borderColor : '#eee',
          borderRadius: 8,
          padding : 4,
          marginTop: 8,
         marginBottom: 8,
        }}
        multiline={true}
        maxLength={254}
        placeholder={Store.getState().AppSetState.lang == "EN" ? "Info About Work" : 'معلومات عن العمل'} />

       <View style={{
         flexDirection: 'row',
         justifyContent : 'space-between',
         alignItems : 'center',
         marginTop: 8,
         marginBottom: 8,
         
       }}>
       <Text>{Store.getState().AppSetState.lang == "EN" ? "Rate Your Customer" : 'قيم العميل'} </Text>
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
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Dismiss" : 'الغاء'}</Text></View>
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
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Send" : 'ارسال'}</Text></View>
            </TouchableWithoutFeedback>
        </View> 
      </Animated.View>
      </View>
    )
  }
}
