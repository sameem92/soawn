import React, { Component } from 'react';
import {View, Text, Dimensions, ImageBackground, TouchableWithoutFeedback, ScrollView} from 'react-native';
import { FirebaseFileUrl} from '../../../assets/Functions'
import { Actions } from 'react-native-router-flux';
fw = Dimensions.get('window').width
fh = Dimensions.get('window').height


const Freelancer_users = (d) => {
    d = d.data
    remove = (id) => {
        FirebaseApp.firestore().collection('Freelancer_users').where("ID", "==", id).get().then((d) => {
            person = d.docs[0].id;
            FirebaseApp.firestore().collection('Freelancer_users').doc(person).delete();
          })
    }

    Block = (id) => {
        FirebaseApp.firestore().collection('Freelancer_users').where("ID", "==", id).get().then((d) => {
            person = d.docs[0].id;
            FirebaseApp.firestore().collection('Freelancer_users').doc(person).update({
                Block : "true",
            })
          })
    }

    unblock = (id) => {
        
        FirebaseApp.firestore().collection('Freelancer_users').where("ID", "==", id).get().then((d) => {
            person = d.docs[0].id;
            FirebaseApp.firestore().collection('Freelancer_users').doc(person).update({
                Block : "false",
            })
          })
    }

    Allow = (id) => {
        FirebaseApp.firestore().collection('Freelancer_users').where("ID", "==", id).get().then((d) => {
            person = d.docs[0].id;
            FirebaseApp.firestore().collection('Freelancer_users').doc(person).update({
                Allow : "1", // true
            })
          })
    }

    UnAllow = (id) => {
        
        FirebaseApp.firestore().collection('Freelancer_users').where("ID", "==", id).get().then((d) => {
            person = d.docs[0].id;
            FirebaseApp.firestore().collection('Freelancer_users').doc(person).update({
                Allow : "0", // false
            })
          })
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Actions.FullFreelancerInfo({
                Email : d.Email,
            })
        }}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignItems: 'center',
            height:100,
            marginBottom: 15,
            zIndex: -1,
        }}>
            <View style={{
                width : fw * .95,
                borderRadius: 8,
                backgroundColor: '#fff',
                elevation: 6,
                flexDirection: 'row',
            }}>
            <View style={{
                width: '30%',
                flexDirection: 'column',
            }}>
            <ImageBackground style={{
                width:'100%',
                height:'100%',

            }} source={{
                uri: FirebaseFileUrl(d.ProfileImage),
            }} />


            </View>

            <View style={{
                flexDirection: 'column',
                width: '100%',
                marginLeft: 5,
            }}>
            <View>
         
            
           <Text style={{
                fontSize: 19
            }}>{d.FullName}</Text>
           
            <Text style={{
                color: '#aaa',
            }}>{d.Email}</Text>
            </View>


        <View style={{
            flexDirection: 'row',
            
        }}>
        <TouchableWithoutFeedback onPress={() => this.remove(d.ID)}>
                <View style={{
                    margin: 5,
                    borderRadius: 8,
                    height:30,
                    marginTop: 15,
                }}>
                    <Text style={{
                        color: '#ff4444',
                    }}>Remove</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => d.Block == "false" ? this.Block(d.ID) : this.unblock(d.ID)}>
                <View style={{
                    margin: 5,
                    borderRadius: 8,
                    height:30,
                    marginTop: 15,
                }}>
                    <Text style={{
                        color: d.Block == "true" ? '#00C851' : "#ff4444",
                    }}>{d.Block == "true" ? 'UnBlock' : "Block"}</Text>
                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback onPress={() => d.Allow == "0" ? this.Allow(d.ID) : this.UnAllow(d.ID)}>
                <View style={{
                    margin: 5,
                    borderRadius: 8,
                    height:30,
                    marginTop: 15,
                }}>
                    <Text style={{
                        color: d.Allow == "1" ? '#00C851' : "#ff4444",
                    }}>{d.Allow == "1" ? 'UnAllow' : "Allow"}</Text>
                </View>
            </TouchableWithoutFeedback>


        
          
        </View>
                
            </View>

            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default class FreeLancers extends Component {
    state = {
        Freelancer_users: [],
        dataGet : false,
    }

    componentWillMount = () => {


          FirebaseApp.firestore().collection('Freelancer_users').onSnapshot((d) => {

            console.log(d);
      
            orders = d.docs;
      
            this.state.Freelancer_users = [];
      
            for (var i in orders) {
              order = orders[i]._document.data.value();
              this.state.Freelancer_users.push(order);
      
            }
            this.setState({
                dataGet: true,
            })
      
          })

          
    }
    
  render() {
    return (
      <ScrollView style={{
          paddingTop: 25,
      }}>
            <ScrollView style={{
                paddingBottom: 25,
                width: fw,
                height: fh * .8,
            }}>

        {this.state.Freelancer_users.length != 0 ? this.state.Freelancer_users.map((d) => {
            console.log(d);
            return <Freelancer_users data={d} />
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
          }}><Text>No Users...</Text></View>}
          </ScrollView>

      </ScrollView>
    )
  }
}