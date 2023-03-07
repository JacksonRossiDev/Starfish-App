import { useNavigation } from "@react-navigation/native"
import { Box, Center, Text, ScrollView, FormControl, VStack, Input } from "native-base"
import React from "react"
import Colors from "../color"
import Buttone from "../Components/Buttone"

const ShippingInputs = [
    {
        label:"Enter Email",
        type:"text"
    },
    {
        label:"Enter Phone Number",
        type:"text"
    },
    
    
]


function ShippingScreen() {
    const navigation = useNavigation();
    return (
        <Box flex={1} safeArea bg={Colors.main} py={5}>
            {/*Header*/}
            <Center pb={15}> 
            <Text color={Colors.white} fontSize={14} bold>
                Delivery Address
            </Text>
            </Center>
            {/* Inputs*/}
            <Box h="full" bg={Colors.backgroundPurple} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                    {ShippingInputs.map((i, index)=> (
                        <FormControl key={index}>
                        <FormControl.Label
                        _text={{
                            fontSize:"12px",
                            fontWeight:"bold"
                        }}
                        >
                            {i.label}
                        </FormControl.Label>
                        <Input 
                        borderWidth={.2} 
                        borderColor={Colors.main} 
                        bg = {Colors.white}
                        py={4}
                        type={i.type}
                        color={Colors.main}
                        _focus={{
                            bg: Colors.backgroundPurple,
                            borderWidth: 1,
                            bordercolor:Colors.main
                        }}
                        />
                    </FormControl>
                    ))}
                    <Buttone bg={Colors.main} color = {Colors.white} mt={5} onPress={()=> navigation.navigate('Checkout')}>
                        Continue
                    </Buttone>

                        
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default ShippingScreen