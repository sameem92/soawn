import React, { Component } from 'react'
import { View , Text,StyleSheet, TextInput,I18nManager } from 'react-native';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
I18nManager.allowRTL(false)

import Page1 from './Pages/Page1';
import Login_EN from './Pages/Login';
import Login_AR from './Pages/Login_AR';
import reset_EN from './Pages/reset';
import reset_AR from './Pages/reset_AR';
import Code_AR from './Pages/Code_AR';
import Code_EN from './Pages/Code';
import Switch_EN from './Pages/switch';
import Switch_AR from './Pages/switch_AR';
import SignUp_EN from './Pages/signUp';
import SignUp2_EN from './Pages/SignUp2';
import SignUp_AR from './Pages/signUp_AR';
import SignUp2_AR from './Pages/SignUp2_AR';
import Thankspage_EN from './Pages/Thankspage';
import Thankspage_AR from './Pages/Thankspage_AR';
import Controlling_AR from './Pages/Controlling_AR';
import Controlling_EN from './Pages/Controlling_En';
import AddNewOrder from './Pages/AddNewOrder';
import ViewFreelancers from './Pages/ViewFreelancers';
import ListOrders from './Pages/ListOrders';
import MapShow from './Pages/MapShow';
import FullFreelancerInfo from './Pages/Cpanal/Assets/FullFreelancerInfo';
import ChangePassword from './Pages/ChangePassword';




// console.reportErrorsAsExceptions = false;
export default class App extends Component {

  
  render() {
    return (
      <Router>
      <Scene>
          <Scene  key="EnterPage" hideNavBar={true} type={ActionConst.RESET}>
          <Scene component={Page1}></Scene>
        </Scene>
      <Scene key="Controlling_EN" hideNavBar={true}  type={ActionConst.RESET}>
        <Scene component={Controlling_EN}></Scene>
      </Scene>

      <Scene key="MapShow" hideNavBar={false} title="Location">
        <Scene hideNavBar={true}  component={MapShow}></Scene>
      </Scene>

      <Scene key="FullFreelancerInfo" hideNavBar={false} title="Info">
        <Scene hideNavBar={true}  component={FullFreelancerInfo}></Scene>
      </Scene>
     


            <Scene key="ListOrders" hideNavBar={true}  >
        <Scene component={ListOrders}></Scene>
      </Scene>

      <Scene key="AddNewOrder" hideNavBar={true}  >
        <Scene component={AddNewOrder}></Scene>
      </Scene>

      <Scene key="ViewFreelancers" hideNavBar={true}>
        <Scene component={ViewFreelancers}></Scene>
      </Scene>
      <Scene key="Controlling_AR" hideNavBar={true}  type={ActionConst.RESET}>
        <Scene component={Controlling_AR}></Scene>
      </Scene> 


            <Scene  key="Login_EN" hideNavBar={true}>
                <Scene component={Login_EN} />
            </Scene>

            <Scene  key="ChangePassword" hideNavBar={true}  type={ActionConst.RESET}>
                <Scene component={ChangePassword} />
            </Scene>

             <Scene  key="Login_AR" hideNavBar={true}>
                <Scene component={Login_AR} />
           </Scene>

           <Scene key="reset_EN" hideNavBar={true}>
             <Scene component={reset_EN} />
           </Scene>
           <Scene key="reset_AR" hideNavBar={true}>
             <Scene component={reset_AR} />
           </Scene>

           <Scene key="Code_EN" hideNavBar={true}>
             <Scene component={Code_EN} />
           </Scene>

           <Scene key="Code_AR" hideNavBar={true}>
             <Scene component={Code_AR} />
           </Scene>


           <Scene key="Switch_EN" hideNavBar={true}>
             <Scene component={Switch_EN} />
           </Scene>

           <Scene key="Switch_AR" hideNavBar={true}>
             <Scene component={Switch_AR} />
           </Scene> 


            <Scene key="SignUp_EN" hideNavBar={true}>
             <Scene component={SignUp_EN} />
           </Scene> 
 
           <Scene key="SignUp2_EN" hideNavBar={true}>
             <Scene component={SignUp2_EN} />
           </Scene>
           <Scene key="SignUp_AR" hideNavBar={true}>
             <Scene component={SignUp_AR} />
           </Scene>

           <Scene key="SignUp2_AR" hideNavBar={true}>
             <Scene component={SignUp2_AR} />
           </Scene> 

           <Scene key="Thankspage_EN" hideNavBar={true} type={ActionConst.RESET}>
             <Scene component={Thankspage_EN} />
           </Scene>

           <Scene key="Thankspage_AR" hideNavBar={true} type={ActionConst.RESET}>
             <Scene component={Thankspage_AR} /> 
           </Scene> 
          

           


           

          </Scene>
      </Router>
    )
  }
}