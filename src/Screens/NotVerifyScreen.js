import { Text, View, Box, Center, VStack, Image, NativeBaseProvider} from "native-base";
import React from 'react';
import Colors from "../color"
import Buttone from "../Components/Buttone"

function NotVerifyScreen() {
  return (
        <Box flex = {1} bg={Colors.main} safeAreaTop>
            <Center w="full" h={250} >
                <Image source = {require("../../assets/favicon.png")} alt = "Logo" size="lg"/> 
            </Center>
            <VStack space = {6} px = {5} alignItems="center">
                <Buttone bg={Colors.black} color={Colors.white}>Register</Buttone>

                <Buttone color={Colors.black} bg={Colors.white}>Login</Buttone>
            </VStack>
            
                
            
        </Box>
       
  );
}

export default NotVerifyScreen;