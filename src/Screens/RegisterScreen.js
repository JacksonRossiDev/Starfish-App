import { Text, View, Box, Image, Button, Pressable, Heading, VStack, Input,  NativeBaseProvider} from "native-base";
import React from 'react';
import Colors from "../color";

function RegisterScreen({navigation}) {
  return (
    
    <Box flex={1} >
    {/* <Image flex = {1} 
    alt = "Logo"
    resizeMode="cover"
    size="lg"
    w="full"
    source={require("./cover2.png")}
    /> */}

    <Box 
    w="full"
    h="full"
    position="absolute"
    flex= {1}
    top = "0"
    px ="6"
    justifyContent="center"
    bgColor={Colors.homescreenBackground}
    >
        <Heading>Sign Up</Heading>
        <VStack space = {5} pt="6">
        {/* USERNAME*/}
        <Input 
            
            variant="underlined" 
            placeholder ="UserName" 
            w="70%" 
            color={Colors.main} 
            borderBottomColor={Colors.underline}/>
        {/*EMAIL*/}
            <Input 
            
            variant="underlined" 
            placeholder ="Email" 
            w="70%" 
            color={Colors.main} 
            borderBottomColor={Colors.underline}/>

            <Input 
            
            variant="underlined" 
            type="password"
            placeholder ="password" 
            w="70%" 
            color={Colors.main} 
            borderBottomColor={Colors.underline}/>
        </VStack>
        <Button 
        _pressed={{
            bg:Colors.main,
        }}
        my = {30}
        w= "40%"
        rounded = {50}
        bg ={Colors.main}

        color={Colors.main} 
        onPress={()=> navigation.navigate('Bottom')}
        >
            Sign Up </Button>
            <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
      <Text color={Colors.deepestGray}>Login</Text>
    </Pressable>
    </Box>




</Box>
    
  );
}

export default RegisterScreen;