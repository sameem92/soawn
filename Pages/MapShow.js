import React, {Component} from "react";
import {View, Text, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

fw  = Dimensions.get('window').width
fh  = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default class MapShow extends Component {


  componentWillMount = () => {
    this.state.place = this.props.Location;
    
  }
  
 

   state = {
      latitude: 7,
      longitude: 7,
      error:null,
      showMaps : false,
      place : { 
        latitude : 30.558087,
        longitude:30.3532413
      }
    };


   componentDidMount() {

    
  
    navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log("wokeeey");
         console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
           showMaps :true,
          });

       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

    render() {
      return (
        <View style={{flex : 1}}>

         { 
           this.state.showMaps == true ? <MapView
          style={ styles.map }
          region={{
           
            latitude:this.state.latitude ,
            longitude:this.state.longitude,
            latitudeDelta: 1,
            longitudeDelta: 1
          }}
        >
          <Marker  coordinate={{
               latitude:this.state.latitude ,
            longitude:this.state.longitude,
          }}  />

        <MapViewDirections
            origin={{
           latitude:this.state.latitude ,
           longitude:this.state.longitude,}}
            destination={this.state.place}
            apikey="AIzaSyB1O8amubeMkw_7ok2jUhtVj9IkME9K8sc"
            strokeWidth={2}
            strokeColor="hotpink"
          />

          <Marker coordinate={this.state.place} />
          </MapView> : <View style={{
            alignItems : 'center',
            justifyContent: 'center',
            height : fh,
            width: fw,
          
            
            }}><Text style={{fontSize : 21,}}>Loading...</Text></View> }
        </View>
      );
    }
  
  }
