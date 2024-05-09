import React, { Component } from 'react'
import {View, Text, ScrollView, ImageBackground, TextInput, TouchableWithoutFeedback} from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'
import {Actions } from 'react-native-router-flux'
export default class AddNewOrder extends Component {

      state= {
        Location: null,
        errorL : false,
        Title : null,
        details: null,

          data : {  
            type :this.props.data[0],
            Email :this.props.data[1],
        }
      }
    
    
    NextStep = () => {
      Location = this.state.Location;
      Title = this.state.Title;
      details = this.state.details;

      if (this.state.errorL == true) {
        return;
      }

      if (Location != null && Title != null && details != null) {


        console.log(this.state)
        Actions.pop();

        Actions.ViewFreelancers(this.state);



      }


    }

    LocationGet=  () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("wokeeey");
          console.log(position);
          this.setState({
            Location : {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            errorL: false,
           });
           // this.GetPlaces();
 
        },
        (error) => this.setState({ errorL: true })
      );
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
        }}>ٍ{Store.getState().AppSetState.lang == "EN" ? "Send a Details" : 'ارسال البينات' } </Text>
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
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <TextInput onChange={(d) => this.state.Title = d.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          textAlign: 'center',
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder={Store.getState().AppSetState.lang == "EN" ? "Title" : 'رأس الاعنوان'} />
        
        </View>

        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <TextInput  onChange={(d) => this.state.details = d.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          textAlign: 'center',
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder={Store.getState().AppSetState.lang == "EN" ? 'Details' : 'تفصيل الخدمة'} multiline={true} />
        
        </View>

        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>

          <TouchableWithoutFeedback onPress={() => {
          // CODE

          this.LocationGet()
          }}>



                  <View style={{
                    borderRadius : 26,
                    borderColor : '#eee',
                    backgroundColor : this.state.Location == null && this.state.errorL == false ? '#cd8d2d' : this.state.errorL == false ? '#00C851' : '#ff4444',
                    padding: 12,
                    width : fw * .8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}> 
                  { this.state.Location == null && this.state.errorL == false ? <Text style={{color : '#fff', fontSize: 16}}>{Store.getState().AppSetState.lang == "EN" ? "Click to select your location" : 'اضغط هنا لتحديد مكانك' }</Text> : this.state.errorL == true ? <Text style={{color : '#fff', fontSize: 16}}>{ Store.getState().AppSetState.lang == "EN" ? "Failed, Make sure Your open GPS" : "فشل, يرجي التاكد من ان محدد المواقع يعمل"}</Text> : <Text style={{color : '#fff', fontSize: 16}}>{Store.getState().AppSetState.lang == "EN" ?"Done" : 'تم التحديد'}</Text> }
          </View>
          </TouchableWithoutFeedback>
        
        </View>


        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
<TouchableWithoutFeedback onPress={() => {
 // CODE

 this.NextStep()
}}>



        <View style={{
          borderRadius : 26,
          borderColor : '#eee',
          backgroundColor : '#cd8d2d',
          padding: 12,
          width : fw * .8,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
        <Text style={{color : '#fff', fontSize: 16}}>{Store.getState().AppSetState.lang == "EN" ? "Next Step" : 'الخطوي الثانية'}</Text>
</View>
</TouchableWithoutFeedback></View>

        
      </ScrollView>
    )
  }
}
