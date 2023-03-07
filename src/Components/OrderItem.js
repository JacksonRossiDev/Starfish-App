import { View, VStack, Pressable, Text, Box, Center, Image, FlatList, HStack, Button } from 'native-base'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import products from "../data/Products"

const OrderItem = () => {
  return (
      <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0,4)}
      keyExtractor={(item)=> item.id}
      renderItem={({item}) => (
          <Pressable>
              <Box mb={3}>
                  <HStack
                  alignItems="center"
                  bg={Colors.white}
                  shadow={1}
                  rounded={10}
                  overflow="hidden"
                >
                    <Center w='25%' bg={Colors.deepGray}>
                        <Image 
                        source={{uri:item.image}} 
                        alt={item.name} 
                        w="full" 
                        h={24} 
                        resizeMode="contain"
                        />
                    </Center>
                    <VStack w='60%' px={2}>
                        <Text isTruncated color={Colors.black} bold fontSize={12}>
                            ${item.name}
                            
                        </Text>
                        <Text isTruncated color={Colors.black}  fontSize={12}>
                            {item.handle}
                        </Text>
                        <Text color={Colors.lightBlack} mt={1} bold >
                            ${item.price} x 5 Posts
                        </Text>
                    </VStack>
                    <Center>
                        <Button 
                        bg={Colors.main} 
                        _pressed={{bg:Colors.main}}
                        _text={{
                            color:Colors.white
                        }}
                        >5
                        </Button>
                        </Center>
                </HStack>
              </Box>

          </Pressable>
      )}
  />  
  )
}

export default OrderItem