import React, { Component } from 'react'
import {View, Text, Dimensions, ImageBackground, TouchableWithoutFeedback, ScrollView} from 'react-native';

import { Rating, AirbnbRating } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

import FirebaseApp from '../../../assets/FirebaseApp';
import {Firebase_Update} from '../../../assets/Functions';

// import Store  from '../../assets/store/store';

export default class Orders__ extends Component {

    state = {
        data : null,
    }


    Dismiss = () => {

      
        // Firebase_Update('ActiveWorks', ["Id", "==", this.props.data.Id], {State : "0"}, (d) => {
        //     console.log('Done ');

        // });

        FirebaseApp.firestore().collection('ActiveWorks').where("Id", "==", this.props.data.Id).get().then((d) => {
          order = d.docs[0].id;
          FirebaseApp.firestore().collection('ActiveWorks').doc(order).delete();
          
        })
        
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


      return <View style={{
        textAlign: 'center',
        justifyContent: 'center',
        width: fw,
        marginLeft : fw * .05
      }}><View
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
            }}>Go To Address</Text>
            </View>
            </TouchableWithoutFeedback>
      </View>
        <View style={{flexDirection: 'row'}}> 
        <Text>From </Text>
          <Text style={{color : '#ffbb33'}}>{d.From}</Text>
        </View>
  
        <View style={{flexDirection: 'row'}}> 
        <Text>To </Text>
          <Text style={{color : '#ffbb33'}}>{d.To}</Text>
        </View>
        <View style={{flexDirection: 'column'}}> 
        <Text>Address </Text>
          <Text style={{color : '#ffbb33'}}>{d.Address}</Text>
        </View>

        <View style={{flexDirection: 'row'}}> 
        <Text>Date </Text>
          <Text style={{color : '#ffbb33'}}>{d.Date}</Text>
        </View>
        

        <View style={{flexDirection: 'row',
justifyContent : d.Time == "Null" ? 'space-between' : 'flex-start'
        }}> 
        <Text>The specified time </Text>
          <Text style={{color : '#ffbb33', }}>{d.Time != "Null" ? d.Time : 'Not selected'}</Text>
        </View>

        <View style={{flexDirection: d.Freelancer_give_about_his_work != "Null" ? 'column' : 'row',  justifyContent : d.Freelancer_give_about_his_work == "Null" ? 'space-between' : 'flex-start'}}> 
        <Text>Freelancer Opinion in the client </Text>
          <Text style={{color : '#ffbb33'}}>{d.Freelancer_give_about_his_work != "Null" ? d.Freelancer_give_about_his_work : 'Not selected'}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent : d.Freelancer_give_Price_get == "Null" ? 'space-between' : 'flex-start'}}> 
        <Text>Freelancer Salary </Text>
          <Text style={{color : '#ffbb33'}}>{d.Freelancer_give_Price_get != "Null" ? d.Freelancer_give_Price_get : 'Not selected'}</Text>
        </View>


        <View style={{flexDirection: 'row', justifyContent : 'space-between', }}> 
        <Text>Freelacner Rate </Text>
         {d.Freelancer_give_rate == "Null" ? <Text style={{color : '#ffbb33'}}> Not  selected </Text>: <Rating
         
  imageSize={12}
  readonly
  startingValue={d.Freelancer_give_rate}
/>}
        </View>

        <View style={{flexDirection: d.needwork_give_info_about_work != "Null" ? 'column' : 'row',  justifyContent : d.needwork_give_info_about_work == "Null" ? 'space-between' : 'flex-start'}}> 
        <Text>Customer Opinion in the Freelacner </Text>
          <Text style={{color : '#ffbb33'}}>{d.needwork_give_info_about_work != "Null" ? d.needwork_give_info_about_work : 'Not selected'}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent : d.needwork_give_price == "Null" ? 'space-between' : 'flex-start'}}> 
        <Text>Customer Salary </Text>
          <Text style={{color : '#ffbb33'}}>{d.needwork_give_price != "Null" ? d.needwork_give_price : 'Not selected'}</Text>
        </View>


        <View style={{flexDirection: 'row', justifyContent : 'space-between', }}> 
        <Text>Customer Rate </Text>
         {d.needWork_give_rate == "Null" ? <Text style={{color : '#ffbb33'}}> Not  selected </Text>: <Rating
         
  imageSize={12}
  readonly
  startingValue={d.needWork_give_rate}
/>}
        </View>

        <View style={{flexDirection: 'column'}}> 
        <Text>Problem </Text>
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
      <View style={{
          flexDirection : 'row',
        }}>
        <TouchableWithoutFeedback onPress={this.Dismiss}>
            
          <View style={{
            backgroundColor : '#ff4444',
            borderRadius :8,
            textAlign : 'center',
            marginRight:1,
            width :'100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding : 5,
          }}><Text style={{color: '#fff'}}>Remove</Text></View>
        </TouchableWithoutFeedback>

        </View> 
      </View></View>;
    }
  }