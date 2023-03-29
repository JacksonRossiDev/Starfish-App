import React, { Component } from 'react'
import {ImageBackground, Dimensions, StyleSheet, TextInput} from 'react-native'
import Picker from '@react-native-picker/picker'
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
  View,
  ScrollView,
  Icon,
  Item, 
  Label,
  FormControl,
  FlatList,
  List,
  Checkbox
} from "native-base";

// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAB3WTFYf2vI8H8IPn5hdaLiotVxn7FXEg",
  authDomain: "starfish-demo.firebaseapp.com",
  projectId: "starfish-demo",
  storageBucket: "starfish-demo.appspot.com",
  messagingSenderId: "834925419138",
  appId: "1:834925419138:web:df827243d3d1a0c897329b",
  measurementId: "G-PSZZZQ2WE9"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:"",
            name:" ",
            open: false,
            value: null,
            items: [{label: 'Apple', value: 'apple'}, {label: 'Banana', value: 'banana'}]
        }
        
        this.onSignUp = this.onSignUp.bind(this)
        this.setValue = this.setValue.bind(this);

    }

    setOpen(open) {
        this.setState({
          open
        });
      }
    
      setValue(callback) {
        this.setState(state => ({
          value: callback(state.value)
        }));
      }
    
      setItems(callback) {
        this.setState(state => ({
          items: callback(state.items)
        }));
    }
    onSignUp() {
        const {email, password, name } = this.state;
        const auth = getAuth();
        const db = getFirestore(app);
        // const authNumberToString =authNumber.toString(); 
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setDoc(doc(db, "users", auth.currentUser.uid), {
            name,
            email
          });
          })
          .catch((error) => {
       
  });
  

        
    }
  render() {
    //const { open, value, items, setOpen, setValue, setItems } = this.state;
    
    return (
      <ScrollView style = {{
        flex:1,
        backgroundColor:'#ffffff'
        
      }}
      showsVerticalScrollIndicator={false}
      > 
      <ImageBackground source={require("./cover3.png")}
      style = {{
        marginTop:0,
        height: Dimensions.get('window').height / 4
      }}
      >
     <View>
       <Icon 
       name="location-sharp"
       style = {{ color: '#ffffff', fontSize: 100}} 
       />
     
     </View>
      </ImageBackground>
      {/* Bottom View */}
      <View style = {styles.bottomView}> 
       <View style={{padding:40}}> 
       <Text style = {{color:'#4632A1', fontSize:24, paddingTop:20}}>Welcome to Starfish!</Text>
       <Text>Sign up for an account!
         {/* <View >
         <Button  onPress={()=> navigation.navigate("Login")} style = {{color:'red', fontStyle:'italic'}}>
           {' '}
           Login</Button>
           </View> */}
       </Text>
       {/* Form Inputs New */}
       <View style = {{marginTop:50}}> 
         <Box floatingLabel style={{borderColor: "4632A1"}}>
         <TextInput 
            placeholder='name'
            onChangeText={(name)=> this.setState({name})}
                />
         </Box>
         <Box floatingLabel style={{borderColor: "4632A1"}}>
         <TextInput 
            placeholder='email'
            onChangeText={(email)=> this.setState({email})}
                />
         </Box>

         <Box floatingLabel style={{borderColor: "4632A1"}}>
         <TextInput 
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password)=> this.setState({password})}
                />
         </Box>
       </View>
       {/* Forgot Password */}
       <View style = {styles.forgotPasswordView}>
         <View style = {{flex:1, marginLeft:-20, flexDirection:'row'} }>
           <Checkbox checked={true} color="#4632A1" style = {{marginRight: 4}}/>
           <Text style = {{color: '#8f9195', alignSelf:'flex-start'}}>Remember Me</Text>
         </View>
         <View style = {{flex:1} }>
           <Text style = {{color: '#8f9195', alignSelf:'flex-end'}}> Forgot Password</Text>
         </View>
       </View>
       {/* Login Buttons and SOcial Login Buttons */}
       <View 
       style={{
         height:100, justifyContent: 'center', alignItems:'center'}} >
           <Button rounded={50} onPress={()=> this.onSignUp()}  style = {styles.loginButton}>Sign Up</Button>
         </View>
       <View style={{flex:1}}>
         <Text style={{textAlign:'center'}}>or Sign Up with</Text>
         {/* {Social Buttons} */}
         <View style={styles.socialLoginView}>
           <Button icon style={{backgroundColor:'#4267b2'}} rounded={100}>
             <Icon
             as={Ionicons}
             name="logo-facebook"
             backgroundColor="white"
              /> 
           </Button>
           <Button icon style={{backgroundColor: '#db4a39'}} rounded={100}>
             <Icon
             as={Ionicons}
             name="logo-google"
             backgroundColor="white"
              /> 
           </Button>
           <Button icon style={{backgroundColor:'#00acee'}} rounded={100}>
             <Icon
             as={Ionicons}
             name="logo-twitter"
             backgroundColor="white"
              /> 
           </Button>
         </View>
       </View>
       </View>
      </View>
   </ScrollView>
    );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // return (
    //   <View style = {{
    //       marginTop: 300,
    //       minHeight: 300
    //   }}> 
    //       <TextInput 
    //         placeholder='name'
    //         onChangeText={(name)=> this.setState({name})}
    //             />
    //       <TextInput 
    //         placeholder='email'
    //         onChangeText={(email)=> this.setState({email})}
    //             />
    //       <TextInput 
    //         placeholder='password'
    //         secureTextEntry={true}
    //         onChangeText={(password)=> this.setState({password})}
    //             />
            
    //         <Button 
    //             onPress={()=> this.onSignUp()}
    //             title="Sign Up"
    //             />
    //   </View>
    // )
  }
}

export default Register

const styles = StyleSheet.create({
  brandView: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  bottomView : {
    flex:1.5,
    backgroundColor: '#ffffff',
    bottom: 40,
    borderTopStartRadius:60,
    borderTopEndRadius:60 
  },
  forgotPasswordView : { 
    height: 50,
    marginTop:20,
    flexDirection:'row',
    marginLeft:25
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor:'#4632A1',
    width: Dimensions.get('window').width / 2,
    justifyContent:'center'

  },
  socialLoginView : {
    flexDirection:'row',
    flex:1,
    justifyContent: 'space-around',
    marginTop:20
  }

})