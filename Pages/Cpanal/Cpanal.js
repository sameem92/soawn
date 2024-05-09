import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Icon } from 'react-native-elements';

import WaitList from './Assets/waitList';



fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;

import Normal_user from './Assets/Normal_user';
import FreeLancers from './Assets/FreeLancers';



export default class Cpanal extends Component {

    state = {
        waitList : false,
        Normal_user : false,
        FreeLancers: false,
    }
  render() {
    return (
      <View style={{
          flex :1,
          height : fh,
          width : fw,

      }}>


      {this.state.waitList == true ? <WaitList />: <View></View>}
      {this.state.Normal_user == true ? <Normal_user />: <View></View>}
      {this.state.FreeLancers == true ? <FreeLancers /> : <View></View>}

      
      
      <View style={{
          justifyContent: 'space-between',
          alignItems : 'center',
          alignContent :'space-between',
          flexDirection: 'row',
          position: 'absolute',
          bottom : 0,
          left : 0,
          width: fw,
          height : 90,
          backgroundColor : '#fff',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          elevation: 5,
          padding: 15,
        zIndex: 900,
            
          
          
          
      }}>

<TouchableWithoutFeedback onPress={() => {
    this.setState({
        waitList : true,
        Normal_user: false,
        FreeLancers: false,
    })

}}>

    <View style={{
        alignItems : 'center',
    }}>
    <View style={{
        margin : 5,
    }}>

    <Icon
    color={this.state.waitList == true ? '#33b5e5' : '#000'}
     type='font-awesome'
  name='list' />
    </View>
  <Text>Orders List</Text>

    </View>
</TouchableWithoutFeedback>


<TouchableWithoutFeedback onPress={() => {
    this.setState({
        waitList : false,
        Normal_user: true,
        FreeLancers: false,
    })

}}>

    <View style={{
        alignItems : 'center',
    }}>
    <View style={{
        margin : 5,
    }}>

    <Icon
    color={this.state.Normal_user == true ? '#33b5e5' : '#000'}
     type='font-awesome'
  name='users' />
    </View>
  <Text>Users</Text>

    </View>
</TouchableWithoutFeedback>



<TouchableWithoutFeedback onPress={() => {
    this.setState({
        waitList : false,
        Normal_user: false,
        FreeLancers: true,
    })

}}>

    <View style={{
        alignItems : 'center',
    }}>
    <View style={{
        margin : 5,
    }}>

    <Icon
    color={this.state.FreeLancers == true ? '#33b5e5' : '#000'}
     type='font-awesome'
  name='briefcase' />
    </View>
  <Text>Freelancer</Text>

    </View>
</TouchableWithoutFeedback>
   

      </View>
        
      </View>
    )
  }
}
