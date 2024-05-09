import React, { Component } from 'react'
import {View, Text, Dimensions, ImageBackground, TouchableWithoutFeedback, ScrollView} from 'react-native';

import FirebaseApp from '../assets/FirebaseApp';
import {Firebase_Update} from '../assets/Functions';

import Store  from '../assets/store/store';
import { Actions } from 'react-native-router-flux';

export default class Orders__ extends Component {

    state = {
        data : null,
    }


    Dismiss = () => {
        Firebase_Update('ActiveWorks', ["Id", "==", this.props.data.Id], {State : "0"}, (d) => {
            console.log('Done ');

        });
        
    }
    
    Dismiss_CloseAll = () => {
      Firebase_Update('ActiveWorks', ["Id", "==", this.props.data.Id], {State : "CloseAll"}, (d) => {
          console.log('Done ');

      });
      
    }
  



    Accept = () => {
        Store.getState().AppSetState.upAcceptOrder();
        Store.dispatch({
            type : 'addState',
            tag: 'orderFocus_id',
            tagValue : this.props.data.Id,
          })
    }

    RateOwnerWork = () => {

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

        var custimerLocation =  JSON.parse(`${d.Address}`);


        console.log(custimerLocation)




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
      <View style={{
        justifyContent : 'space-between',
        alignItems: 'center',
        flexDirection : 'row',


      }}>
          <Text style={{textAlign : 'center', fontSize : 21}}> {d.Title}</Text>
              <TouchableWithoutFeedback onPress={() => Actions.MapShow({"Location" : custimerLocation})}>
            <View style={{flexDirection: 'row'}}> 

            <Text style={{
              color: '#ff4444'
            }}>{Store.getState().AppSetState.lang == "EN" ?"Go To Address" : 'الذهاب للعنوان'}</Text>
            </View>
            </TouchableWithoutFeedback>
      </View>
        {/* <View style={{flexDirection: 'row'}}> 
        <Text>From </Text>
          <Text style={{color : '#ffbb33'}}>{d.From}</Text>
        </View>
  
        <View style={{flexDirection: 'row'}}> 
        <Text>To </Text>
          <Text style={{color : '#ffbb33'}}>{d.To}</Text>
        </View> */}
        
  
        <View style={{flexDirection: Store.getState().AppSetState.lang == "EN" ? 'row' : "row-reverse"}}> 
        <Text>{Store.getState().AppSetState.lang == "EN" ?"Date" : 'التاريخ'} </Text>
          <Text style={{color : '#ffbb33'}}>{d.Date}</Text>
        </View>
  
        <View style={{flexDirection: 'column'}}> 
        <Text>{Store.getState().AppSetState.lang == "EN" ? "Problem" : 'تفصيل الخدمة'} </Text>
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
          flexDirection : 'row',
        }}>
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

        <TouchableWithoutFeedback onPress={this.Accept}>
          
          <View style={{
            backgroundColor : '#00C851',
            borderRadius :8,
            marginLeft:1,
            textAlign : 'center',
            width :'50%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Accept" : 'لموافقة'} </Text></View>
            </TouchableWithoutFeedback>
        </View> 
        
        : d.State == "3" ? 
        <TouchableWithoutFeedback onPress={this.RateOwnerWork}>
        
        <View style={{
            backgroundColor : '#00C851',
            borderRadius :8,
            textAlign : 'center',
            marginRight:1,
            width :'100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>{Store.getState().AppSetState.lang == "EN" ?"Rate Your Work." : 'قيم عملك'}</Text></View>
          </TouchableWithoutFeedback>
        
        : d.State != "ClosefromCustomer"  ? <View style={{flexDirection : Store.getState().AppSetState.lang == "EN" ?'row' : 'row-reverse', justifyContent : 'space-between'}}>
        
        <Text style={{
          paddingTop: 5,
        }}>{Store.getState().AppSetState.lang == "EN" ?"Waiting you there"  : 'العميل في انتظارك'}</Text>
        
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
          }}><Text style={{color: '#fff'}}>{ Store.getState().AppSetState.lang == "EN" ?"Dismiss" : 'الغاء'}</Text></View>
          </TouchableWithoutFeedback>
        
        
        </View> :<View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
        
        <Text style={{
          paddingTop: 5,
          color : '#ff4444'
        }}>{Store.getState().AppSetState.lang == "EN" ?"Work Closed" : 'العمل تم الغاءة'}</Text>
        
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
        
        
        </View>
       }
      </View>;
    }
  }