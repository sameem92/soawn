import React, { Component } from 'react';

import {View, Text, Dimensions, ImageBackground, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { FirebaseFileUrl} from '../../../assets/Functions';
import FirebaseApp from '../../../assets/FirebaseApp';
import { Rating, AirbnbRating } from 'react-native-elements';
 
import { Actions } from 'react-native-router-flux';
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


export default class FullFreelancerInfo extends Component {

    state = {
        Email : this.props.Email,
        info : null, 
        skillsArray : [
            "Plumbing",
            "AC",
            "Electricity",
            "Phone and Computers",
            "Paint and Dyes",
        ]
    }


    componentWillMount = () => {
        FirebaseApp.firestore().collection('Freelancer_users').where('Email', "==", this.state.Email).onSnapshot((d) => {

            info = orders[0]._document.data.value();
            this.setState({
                info: info,
            })
      
          })
      
    }
    
  render() {
    return (
      <ScrollView>

{
    this.state.info != null ? (
        <View style={{
            alignItems: 'center',
        }}>

            <View style={{
                flexDirection: 'row',
            }}>
                <Text>Email </Text>
                <Text style={{
                    color: '#0099CC',
                }}> {this.state.info.Email}</Text>
            </View>
            
            <View style={{
                flexDirection: 'row',
            }}>
                <Text>Birthday </Text>
                <Text style={{
                    color: '#0099CC',
                }}> {this.state.info.Birthday}</Text>
            </View>

            
            <View style={{
                flexDirection: 'row',
            }}>
                <Text>FullName </Text>
                <Text style={{
                    color: '#0099CC',
                }}> {this.state.info.FullName}</Text>
            </View>

            
            <View style={{
                flexDirection: 'row',
            }}>
                <Text>Phone </Text>
                <Text style={{
                    color: '#0099CC',
                }}> {this.state.info.Phone}</Text>
            </View>

            
            <View style={{
                flexDirection: 'row',
            }}>
                <Text>Skills </Text>
                <Text style={{
                    color: '#0099CC',
                }}> {this.state.skillsArray[this.state.info.Skills]}</Text>
            </View>

            
            <View style={{
                flexDirection: 'row',
            }}>
                <Text>Rate </Text>
                <Rating
            startingValue={GetRate(this.state.info.Rate)[0]}
          imageSize={10}
          style={{
            paddingTop: 5,
            paddingLeft: 5,
          }}
        readonly
      />
            </View>

            <View style={{
                flexDirection: 'column',
            }}>
                <Text>Certifcate Image </Text>
                <ImageBackground style={{
                    width: fw,
                    height: 300
                }} source={{uri : FirebaseFileUrl(this.state.info.CertifcateImage)}}/>
               
            </View>
            <View style={{
                flexDirection: 'column',
            }}>
                <Text>ID Image </Text>
                <ImageBackground style={{
                    width: fw,
                    height: 300
                }} source={{uri : FirebaseFileUrl(this.state.info.IDGETIMAGE)}}/>
               
            </View>
    </View>) : <View style={{
          alignItems : 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: fw,
          height: fh,
          }}><Text>Loading...</Text></View>
}
       

      
        
      </ScrollView>
    )
  }
}
