/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text, ImageBackground, Dimensions, TextInput, ScrollView, TouchableWithoutFeedback, Image, Picker } from 'react-native';
import { Icon, Input,CheckBox} from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import FirebaseApp from '../assets/FirebaseApp';

import {AddFunc, uploadImage} from '../assets/Functions';


import ImagePicker from 'react-native-image-picker';



import RNFetchBlob from 'react-native-fetch-blob'







fw = Dimensions.get('window').width;
fh = Dimensions.get('window').height;



// FirebaseApp.storage().ref('/').child('Hello4.txt').putString('1');
// AddFunc(
//   "Freelancer_users", { "test" : 'test'},);
  

export default class SignUp2_AR extends Component {


  
  

  state = {
    checked : false,

    CertifcateImage : null,
    ProfileImage : null,
    IDGETIMAGE: null,

    CertifcateImagetype : null,
    ProfileImagetype : null,
    IDGETIMAGEtype: null,
    
    FullName : null,
    Phone : null,
    Email : null,
    Birthday : null,
    loading__ : false,
    
    Password : null,
    ID : null,
    Skills : "1",
    // for error
    alertErrorMessage : '',
    visableAlertError : false,
    
  }
    //   uploadImage  = (uri, type, fileName, SuccessFun = () => {}, ErrorFunc = () => {}) => {
    //     console.log(type)
    
    
    //     let filePath = uri;
    //     let rnfbURI = RNFetchBlob.wrap(filePath);
    //     // create Blob from file path
    //     Blob
    //     .build(rnfbURI, { type : type})
    //     .then((blob) => {
    //       // upload image using Firebase SDK
    //       FirebaseApp.storage()
    //         .ref('images')
    //         .child(fileName)
    //         .put(blob, { contentType : type })
    //         .then(SuccessFun).catch(ErrorFunc);
        
        
    //       });
    // }
 

  pushError = (message) => {
    this.setState({
      alertErrorMessage : message,
      visableAlertError : true,
    })
}



SignUp_func = () => {
    
  if (
    this.state.FullName   !== null      && this.state.FullName.length > 4     &&
    this.state.Email      !== null      && this.state.Email.length > 4        &&
    this.state.Phone      !== null      && this.state.Phone.length > 4        &&
    this.state.Birthday      !== null   && this.state.Birthday.length > 4     &&
   /*  this.state.Skills      !== null     && this.state.Skills.length > 4       && */
    this.state.Password   !== null      && this.state.Password.length > 4     &&
    this.state.CertifcateImage !== null && this.state.CertifcateImage.length > 4 &&
    this.state.ProfileImage !== null && this.state.ProfileImage.length > 4
    ) {
      var unqiuid =  `ID_${Math.random() * 1000000000}`;
      ProfileImagetype_ = (this.state.ProfileImagetype).split('/')[1]
      CertifcateImage_ = (this.state.CertifcateImagetype).split('/')[1]
      IDGETIMAGE_ = (this.state.IDGETIMAGEtype).split('/')[1]
      AddFunc(
        "Freelancer_users",{
          "Block" : 'false',
          "FullName" : this.state.FullName,
          "Email" : this.state.Email,
          "Allow" : "0", // not allow to access for real works
          "ActiveState" : '0', // not active
          "Password" : this.state.Password,
          "Skills" : this.state.Skills,
          "Birthday" : this.state.Birthday,
           "Rate" : '[]',
          "Phone" : this.state.Phone,
          "ID" : `${unqiuid}`,
          IDGETIMAGE : `${unqiuid}_ProfileImage.${ProfileImagetype_}`,
          "CertifcateImage" : `${unqiuid}_CertifcateImage.${CertifcateImage_}`,
          "ProfileImage" : `${unqiuid}_IDGETIMAGE.${IDGETIMAGE_}`,
        },
        () => {
          console.log('Here i uploading image :D ')
         
          uploadImage(this.state.ProfileImage, this.state.ProfileImagetype, `${unqiuid}_ProfileImage`, () => {
            console.log('Done after 1 .. ')
            
            uploadImage(this.state.CertifcateImage, this.state.CertifcateImagetype,  `${unqiuid}_CertifcateImage`, () => {
                  console.log('Done after 2 .. ')
                  uploadImage(this.state.IDGETIMAGE, this.state.IDGETIMAGEtype,  `${unqiuid}_IDGETIMAGE`, () => {
                    console.log('Done after 3 .. Done ALL!')
                    Actions.Thankspage_AR({ Email : this.state.Email, Type_ : 'Freelancer'} );

                  }, () =>  this.pushError('حول مرة اخري'));        
                }, () => {
                  this.pushError('حول مرة اخري')
                });
            

              }, () => {
                this.pushError('حول مرة اخري')
              });
  
                  },
            () => this.pushError('هنا خطأ تاكد من اتصالك بانترنت'),
            true,
        ["ID", "==", this.state.ID],
        () => this.pushError('حول مرة اخري في وقت اخري "ID"'),
        () => this.setState({visableAlertError : false,}),
        );



          this.setState({
            loading__ : true,
          })





      
    } else {
      // error complete your information
      this.pushError('error complete your information !! must name,email,password more than 4 letters')

    }

}




  GetCertifcate = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  

        this.setState({
          CertifcateImage: response.path,
          CertifcateImagetype : response.type,

        });
      }
    });



  }
  
  ProfileImage = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          ProfileImage: response.path,
          ProfileImagetype : response.type,
        });
      }
    });



  }

  IDGETIMAGE = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          IDGETIMAGE: response.path,
          IDGETIMAGEtype : response.type,
        });
      }
    });



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
        }}>المهني</Text>
           <TouchableWithoutFeedback onPress={( ) => Actions.EnterPage()}>

        <ImageBackground 
        style={{
          width : 90,
          height : 90,
        }}
        source={require('./assets/smallLogo.png')} />
        </TouchableWithoutFeedback>
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

        <TextInput  onChange={(value) => this.state.FullName = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          textAlign: 'center',
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="الاسم كامل" />
        
        </View>



        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>

        <TextInput  onChange={(value) => this.state.Phone = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .4,
          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="رقم الهاتف" />


        <TextInput  onChange={(value) => this.state.Email = value.nativeEvent.text} style={{

        padding : 9,
        borderRadius : 26,
        borderWidth : 1,
        fontSize: 19,
        width : fw * .4,
        marginTop : 5,
        marginBottom: 10,
        borderColor : '#aaa'
        }} placeholder="الايميل" />
                
        </View>


        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        

        <TextInput  onChange={(value) => this.state.Birthday = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          marginTop : 5,
          textAlign: 'center',

          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="تاريخ الميلاد" />
        
        </View>

     
        <TouchableWithoutFeedback onPress={this.IDGETIMAGE}>

        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>



        <View   style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          textAlign: 'center',

          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="" >
          <Text style={{textAlign: 'center'}}>صورة من البطاقة الشخصية</Text>
        </View>
        
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.GetCertifcate}>

        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>



        <View   style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          textAlign: 'center',

          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="" >
          <Text style={{textAlign: 'center'}}>شهادة التخرج</Text>
        </View>
        
        </View>
        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={this.ProfileImage}>

<View style={{
  // flexDirection : 'row'
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}}>



<View   style={{

  padding : 9,
  borderRadius : 26,
  borderWidth : 1,
  fontSize: 19,
  width : fw * .8,
  textAlign: 'center',

  marginTop : 5,
  marginBottom: 10,
  borderColor : '#aaa'
}} placeholder="" >
  <Text style={{textAlign: 'center'}}>اختر صورة الايمال</Text>
</View>

</View>
</TouchableWithoutFeedback>

<View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>



        <TextInput secureTextEntry={true} onChange={(value) => this.state.Password = value.nativeEvent.text} style={{

          padding : 9,
          borderRadius : 26,
          borderWidth : 1,
          fontSize: 19,
          width : fw * .8,
          textAlign: 'center',

          marginTop : 5,
          marginBottom: 10,
          borderColor : '#aaa'
        }} placeholder="الرقم السري" />
        
        </View>
        <View style={{
          // flexDirection : 'row'
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          

        <Picker
          selectedValue={this.state.Skills}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({Skills: itemValue})
          }>
          <Picker.Item label="سباكة" value="1" />
          <Picker.Item label="مكيفات" value="2" />
          <Picker.Item label="كهرباء" value="3" />
          <Picker.Item label="هواتف وحواسيب" value="4" />
          <Picker.Item label="دهان واصباغ" value="5" />
        </Picker>
        
        </View>


        <View style={{
       justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 30,
}}>

<CheckBox
          title="اوافق علي جميع الشروط والبنود"
          center
          containerStyle={{ borderWidth : 0, backgroundColor : 'transparent'}}
          checkedColor="red"
          checked={this.state.checked}
          onPress={() => {
            if (this.state.checked == true) {
              this.setState({
                checked: false
              })
            } else {
              this.setState({
                checked: true
              })
            }
          }}
        />
           <TouchableWithoutFeedback onPress={
          //() => Actions.Thankspage_AR()
          () => this.state.loading__ == false ? this.SignUp_func() : () => {}
        }>

        <View style={{
          borderRadius : 26,
          borderColor : '#eee',
          backgroundColor : '#cd8d2d',
          padding: 12,
          width : fw * .8,
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
        <Text style={{color : '#fff', fontSize: 16}}>{ this.state.loading__ == false ? "تسجيل دخول" : 'جاري التحميل ...'}</Text>
</View>
</TouchableWithoutFeedback>
        </View>
   
        {this.state.visableAlertError == true ? <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft : fw * .15,
          marginTop: 25,

        }}>

        <Text style={{
          fontSize : 14,
          width : fw * .7,
          color : '#ff4444',
          borderWidth  : 1,
          borderColor : "#ff4444",
          textAlign : 'center'}}>{this.state.alertErrorMessage}</Text>

        </View> : <View></View>}
    </ScrollView>
    );
  }
}

