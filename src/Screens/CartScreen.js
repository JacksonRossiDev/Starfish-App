import { Text, View, Box, Button,  Center,  HStack, NativeBaseProvider, ScrollView} from "native-base";
import React from 'react';
import Colors from "../color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

function CartScreen() {
  const navigation = useNavigation()
  return (
        <Box flex ={1} safeAreaTop bg={Colors.backgroundPurple}>
          {/* Header */}
          <Center w="full" py={5}>
            <Text color={Colors.black} fontSize = {20} bold>
              Cart
            </Text>
          </Center>
            {/*IF CART IS EMPTY
            <CartEmpty/>
            */}
            {/* Cart Items */}
            <ScrollView showsHorizontalScrollIndicator={false}>
              <CartItems />
              {/*Buttons*/}
              <Center mt={5}>
                <HStack rounded = {50} justifyContent="space-between" bg={Colors.white} shadow={2} w='90%' pl={5} h={45} alignItems="center"
              >
                <Text >Total</Text>
                <Button 
                px={10} 
                h={45} 
                rounded={50} 
                bg={Colors.main}
                _text={{
                  color:Colors.white,
                  fontWeight:"semiBold"
                }}
                _pressed={{
                  bg: Colors.main
                }}>
                  $1,565
                </Button>
                </HStack>
              
              </Center>

              {/* Checkout */}
        <Center px={5}>
          <Buttone bg={Colors.black} color = {Colors.white} mt={10} onPress={()=> navigation.navigate('Shipping')}>
            CHECKOUT
          </Buttone>
        </Center>



            </ScrollView>
        </Box>
  );
}

export default CartScreen;