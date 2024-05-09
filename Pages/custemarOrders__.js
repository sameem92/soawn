import React, { Component } from 'react'
import {View, Text, Dimensions, ImageBackground, TouchableWithoutFeedback, ScrollView} from 'react-native';

import FirebaseApp from '../assets/FirebaseApp';
import {Firebase_Update} from '../assets/Functions';

import Store  from '../assets/store/store';

export default class CustemarOrders__ extends Component {

    state = {
        data : null,
    }


    Dismiss = () => {
        Firebase_Update('ActiveWorks', ["Id", "==", this.props.data.Id], {State : "ClosefromCustomer"}, (d) => {
            console.log('Done ');

        });
        
    }

    Dismiss_CloseAll = () => {
        Firebase_Update('ActiveWorks', ["Id", "==", this.props.data.Id], {State : "CloseAll"}, (d) => {
            console.log('Done ');

        });
        
    }
    


 

    RateWork = () => {

      Store.getState().AppSetState.upRateUp();
      Store.dispatch({
        type : 'addState',
        tag: 'orderFocus_id',
        tagValue : this.props.data.Id,
      })

    }

    componentWillMount() {
       this.state.data = this.props.data
    }

    render () {
        d = this.state.data;

      return <View
      style={{
        backgroundColor : '#fff',
        borderRadius: 8,
        elevation : 4,
        width : fw * .9,
        minHeight : 120,
        marginTop: 10,
        padding : 10,
        flexDirection : 'column',
  
      }}
      key={d.Id}>
          <Text style={{textAlign : 'center', fontSize : 21}}> {d.Title}</Text>
      
  
        <View style={{flexDirection: Store.getState().AppSetState.lang == "EN" ? 'row' : 'row-reverse',}}> 
        <Text>{Store.getState().AppSetState.lang == "EN" ? "Date" : 'التاريخ'} </Text>
          <Text style={{color : '#ffbb33'}}>{d.Date}</Text>
        </View>
  
        <View style={{flexDirection: 'column'}}> 
        <Text>{Store.getState().AppSetState.lang == "EN" ? "Problem" : 'المشكلة'} </Text>
          <Text style={{color : '#ffbb33'}}>{d.info}</Text>
        </View>
  
        <View></View>
      <View style={{
        width: '100%',
        height: 1,
        backgroundColor : '#bbb',
        marginTop : 5,
        marginBottom: 5,
  
      }}></View>
       {
         d.State == "1" ?  <View style={{
          justifyContent : 'space-between',
          flexDirection : Store.getState().AppSetState.lang == "EN" ? 'row' : 'row-reverse',
        }}>
            <Text style={{
                color: '#ffbb33',
                marginTop : 5,
            }}>{Store.getState().AppSetState.lang == "EN" ?"Waiting acceptance" : 'انتظار قبول الخدمة'}</Text>
              <TouchableWithoutFeedback onPress={this.Dismiss}>
        <View style={{
            backgroundColor : '#ff4444',
            borderRadius :8,
            textAlign : 'center',
            marginRight:1,
            width :'50%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Dismiss" : 'الغاء'}</Text></View>
          </TouchableWithoutFeedback>
        </View> 
        
        : d.State == "2" ?   
        <TouchableWithoutFeedback onPress={this.RateWork}>
        
        <View style={{
            backgroundColor : '#00C851',
            borderRadius :8,
            textAlign : 'center',
            marginRight:1,
            width :'100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Rate a Work." : 'قيم العمل'}</Text></View>
          </TouchableWithoutFeedback>
        
        : d.State == "Close" ? <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
        
        <Text style={{
          paddingTop: 5,
          color : '#ff4444'
        }}>{Store.getState().AppSetState.lang == "EN" ?"was not accepted" : 'لم يقبل'}</Text>
        
        <TouchableWithoutFeedback onPress={this.Dismiss_CloseAll}>
        <View style={{
            backgroundColor : '#ff4444',
            borderRadius :8,
            textAlign : 'center',
            marginRight:1,
            width :'50%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Dismiss" : 'الغاء'}</Text></View>
          </TouchableWithoutFeedback>
        
        
        </View> : <View></View>
       }
      </View>;
    }
  }