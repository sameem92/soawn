import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableWithoutFeedback} from 'react-native';

import Rate_En from './Rate';

import Profile_En from './profile';


import SERVS_En from './SERVS';

import WorkSend_En from './workSend';
import FreeLanceCpanal_EN from './FreeLanceCpanal_EN';
import Cpanal from './Cpanal/Cpanal';

export default class Controlling_EN extends Component {

  state = {
    rate : false,
    profile : false,
    servs : false,
    worksend : false,
    freeLanceCpanal : false,
    Cpanal : false,
  }
  componentWillMount () {
    

       
    console.log(this)


    if (this.props.Type_ == "Admin") {
      this.setState({
        Cpanal : true,
      })

    } else if (this.props.Type_ == 'user') {
      this.setState({
        servs: true,


      })
    } else {
      this.setState({
        freeLanceCpanal : true,

      })
    }

  }
  render() {
    return (
      <View style={{flex : 1}}>

        
        {/* { this.state.rate == true  ? <Rate_En/> : <View></View> } */}
        {/* { this.state.profile == true  ? <Profile_En/> : <View></View> } */}
        {/* { this.state.worksend == true  ? <WorkSend_En/> : <View></View> } */}
        { this.state.servs == true  ? <SERVS_En Email={this.props.email} /> : <View></View> }
        { this.state.freeLanceCpanal == true  ? <FreeLanceCpanal_EN Email={this.props.email}/> : <View></View> }
        { this.state.Cpanal == true  ? <Cpanal /> : <View></View> }
        
  
        <View
          style={{
            // justifyContent : 'space-evenly',
            // alignItems :'stretch',
            flexDirection : 'row-reverse',
            position: 'absolute',
            flex : 1,
            bottom : 0,
            right : 0,
          }}>
          <View style={{
            position: 'relative',
            width :fw,
            flexDirection : 'row-reverse',

            justifyContent  : 'space-evenly',
            alignItems : 'center',

          }}>



          </View>
          </View>

      </View>
    )
  }
}
