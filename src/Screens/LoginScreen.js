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
  import React from "react";
  import Colors from "../color";
  import { MaterialIcons, Ionicons } from "@expo/vector-icons";
  import { Dimensions, ImageBackground, StyleSheet } from "react-native";
  
  function LoginScreen({ navigation }) {
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
        <Text style = {{color:'#4632A1', fontSize:24}}>Welcome</Text>
        <Text>Don't have an account?
          <Text style = {{color:'red', fontStyle:'italic'}}>
            {' '}
            Register now</Text>
        </Text>
        {/* Form Inputs New */}
        <View style = {{marginTop:50}}> 
          <Box floatingLabel style={{borderColor: "4632A1"}}>
          <FormControl> 
            <FormControl.Label> Email</FormControl.Label>
            <Input rounded={50} value="" keyboardType="email-address"/>
            <Icon name="checkmark" style={{color: '#4632A1'}}/>
            </FormControl>
          </Box>

          <Box floatingLabel style={{borderColor: "4632A1"}}>
          <FormControl> 
            <FormControl.Label> Password</FormControl.Label>
            <Input value="" rounded={50}  />
            <Icon name="eye" style={{color: '#4632A1'}}/>
            </FormControl>
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
            <Button rounded={50} onPress={() => navigation.navigate("Bottom")}  style = {styles.loginButton}>Login</Button>
          </View>
        <View style={{flex:1}}>
          <Text style={{textAlign:'center'}}>or Login with</Text>
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


















    //   <Box flex={1} bg={Colors.white}>
    //     <Image
    //       flex={1}
    //       alt="Logo"
    //       resizeMode="cover"
    //       size="lg"
    //       w="full"
    //       source={require("./cover.png")}
    //     />
    //     <Box
    //       w="full"
    //       h="full"
    //       position="center"
    //       top="0"
    //       px="6"
    //       justifyContent="center"
    //     >
    //       <Heading>LOGIN</Heading>
    //       <VStack space={5} pt="6">
    //         {/* EMAIL */}
    //         <Input
    //           InputLeftElement={
    //             <MaterialIcons name="email" size={20} color={Colors.main} />
    //           }
    //           variant="underlined"
    //           placeholder="user@gmail.com"
    //           w="70%"
    //           pl={2}
    //           type="text"
    //           color={Colors.main}
    //           borderBottomColor={Colors.underline}
    //         />
    //         {/* PASSWORD */}
    //         <Input
    //           InputLeftElement={
    //             <Ionicons name="eye" size={20} color={Colors.main} />
    //           }
    //           variant="underlined"
    //           placeholder="*********"
    //           w="70%"
    //           type="password"
    //           pl={2}
    //           color={Colors.main}
    //           borderBottomColor={Colors.underline}
    //         />
    //       </VStack>
    //       <Button
    //         _pressed={{
    //           bg: Colors.main,
    //         }}
    //         my={30}
    //         w="40%"
    //         rounded={50}
    //         bg={Colors.main}
    //         onPress={() => navigation.navigate("Bottom")}
    //       >
    //         LOGIN
    //       </Button>
    //       <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
    //         <Text color={Colors.deepestGray}>SIGN UP</Text>
    //       </Pressable>
    //     </Box>
    //   </Box>
  }
  
  export default LoginScreen;

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