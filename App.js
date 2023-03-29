import {  Text, View } from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeBaseProvider, StatusBar } from 'native-base';
import BottomNav from './src/Navigations/BottomNav';
import LoginScreen from './src/Screens/LoginScreen'
import OrderScreen from './src/Screens/OrderScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Provider } from 'react-redux'
import ProfileScreen from './src/Screens/ProfileScreen';
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/Components/redux/reducers';
import thunk from 'redux-thunk';
import MainScreen from './src/Screens/Main';
import OrderModel from './src/Components/OrderModel';

const store = createStore(rootReducer, applyMiddleware(thunk))

//const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyAB3WTFYf2vI8H8IPn5hdaLiotVxn7FXEg",
  authDomain: "starfish-demo.firebaseapp.com",
  projectId: "starfish-demo",
  storageBucket: "starfish-demo.appspot.com",
  messagingSenderId: "834925419138",
  appId: "1:834925419138:web:df827243d3d1a0c897329b",
  measurementId: "G-PSZZZQ2WE9"
};

if (firebase.apps.length === 0 ) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createNativeStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user)=> {
      if(!user) {
        this.setState({
          loggedIn:false,
        loaded: true})
      } else {
        this.setState({
          loggedIn: true, 
          loaded: true
        })
      }
    })
  }
  
  render() {
    const {loggedIn, loaded} =  this.state;

    if(!loaded) {
      return ( 
        <View style = {{ flex:1, justifyContent:'center', marginTop: 300}}>
          <Text>
            Loading
          </Text>
        </View>
      )
    }

    if(!loggedIn) {
      return (
        <NativeBaseProvider >
            <NavigationContainer>
              <StatusBar hidden={true} />
              <Stack.Navigator 
                initialRouteName = "Register" 
                screenOptions={{
                headerShown:false
              }}
              >
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="order" component={OrderScreen}/>
                <Stack.Screen name="Bottom" component={BottomNav}/>
                
              </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
      );
    }
      return ( 
        <Provider store={store}>
        <NativeBaseProvider >
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Bottom'>
            <Stack.Screen name="Bottom" component={BottomNav} options={{headerShown:false}}/>
            <Stack.Screen name="order" component={OrderScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/>
            <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
        </NativeBaseProvider>
        </Provider>
      )
  }
}

export default App















// const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//   <NativeBaseProvider >
//       <NavigationContainer>
//         <StatusBar hidden={true} />
//         <Stack.Navigator 
//           initialRouteName = "Register" 
//           screenOptions={{
//           headerShown:false
//         }}
//         >
//           <Stack.Screen name="Login" component={LoginScreen}/>
//           <Stack.Screen name="Register" component={RegisterScreen}/>
//           <Stack.Screen name="order" component={OrderScreen}/>
//           <Stack.Screen name="Bottom" component={BottomNav}/>
          
//         </Stack.Navigator>

//       </NavigationContainer>
//   </NativeBaseProvider>
//   )
// }

