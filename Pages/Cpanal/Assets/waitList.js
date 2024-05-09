import React, { Component } from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';

import Orders__ from './Order';

import FirebaseApp from '../../../assets/FirebaseApp';



fw = Dimensions.get('window').width
fh = Dimensions.get('window').height

export default class WaitList extends Component {

    state = {
        orders_info_state_1: [],
        dataGet : false,
    }

    componentWillMount = () => {


          FirebaseApp.firestore().collection('ActiveWorks').onSnapshot((d) => {

            console.log(d);
      
            orders = d.docs;
      
            this.state.orders_info_state_1 = [];
      
            for (var i in orders) {
              order = orders[i]._document.data.value();
              this.state.orders_info_state_1.push(order);
      
            }
            this.setState({
                dataGet: true,
            })
      
          })

          
    }
    
  render() {
    return (
      <View style={{
         paddingTop: 25,
         justifyContent: 'center',
         alignItems : 'center',
         alignContent: 'center',
         flex : 1,
      }}>
      <ScrollView style={{
               
                paddingBottom: 25,
                width: fw,
                height: fh * .8,
              
            }}>

        {this.state.orders_info_state_1.length != 0 ? this.state.orders_info_state_1.map((d) => {
            console.log(d);
            return <Orders__ data={d} />
        }) : this.state.dataGet == false ? <View style={{
          alignItems : 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: fw,
          height: fh,
          }}><Text>Loading...</Text></View> :  <View style={{
          alignItems : 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: fw,
          height: fh,
          }}><Text>No Date...</Text></View>}
          </ScrollView>
          </View>
    )
  }
}
