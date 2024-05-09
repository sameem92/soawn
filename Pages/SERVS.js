/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import Store from '../assets/store/store';


fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

export default class SERVS_En extends Component {
  state = {
    checked : false,
  }
 
  componentWillMount = () => {
    console.log(this);
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
        }}> {  Store.getState().AppSetState.lang == "EN"  ? "SERVICE" : 'خدمات'}</Text>
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
          



<TouchableWithoutFeedback onPress={() =>
{

Actions.AddNewOrder([1, this.props.Email]);
}
}>

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
          <Text>{ Store.getState().AppSetState.lang == "EN"  ? "Plumbing" : 'سباكة' }</Text>
      </View>



</TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={() =>
{

Actions.AddNewOrder([2, this.props.Email]);
}
}>
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
          <Text>{Store.getState().AppSetState.lang == "EN" ? "AC" : "مكيفات"}</Text>
      </View>



 </TouchableWithoutFeedback>
     
      


      </View>


      
    
      <View style={{
          alignItems: 'flex-end',
          flexDirection : 'row',
          justifyContent: 'space-between'
        }}>
          



          <TouchableWithoutFeedback onPress={
            
            () =>
{

Actions.AddNewOrder([3, this.props.Email]);
}
}

>
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
          <Text> { Store.getState().AppSetState.lang == "EN"  ? "Electricity" : 'كهرباء' }</Text>
      </View>
</TouchableWithoutFeedback>


<TouchableWithoutFeedback onPress={() =>
{

Actions.AddNewOrder([4, this.props.Email]);
}
}>
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
          <Text>{ Store.getState().AppSetState.lang == "EN"  ? "Phone and \n Computers" : 'هواتف \n وحواسيب' }</Text>
      </View>



     </TouchableWithoutFeedback>
      


      </View>

      <View style={{
          // alignItems: 'flex-start',
          // flexDirection : 'row',
          // justifyContent: ''
        }}>
          


          <TouchableWithoutFeedback onPress={() =>
{

Actions.AddNewOrder([5, this.props.Email]);
}
}>

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
          <Text>{ Store.getState().AppSetState.lang == "EN"  ? "Paint and Dyes" : 'دهان واصباغ' }</Text>
      </View>
      </TouchableWithoutFeedback>



    

     
      


      </View>
          
</ScrollView>

          <View style={{
            position :'absolute',
            bottom : 0,
            left: 0,
          }}>
          <Icon
  raised
  name='list'
  type='font-awesome'
  color='#faaf3a'
  onPress={() => Actions.ListOrders({
    Email : this.props.Email,
  })} />
          </View>
    </View>
    );
  }
}

