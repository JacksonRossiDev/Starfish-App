import { Text, View, Image, Spacer, NativeBaseProvider, HStack,  Heading, Box, ScrollView} from "native-base";
import {React, useState} from 'react';
import  Colors  from "../color";
import NumericInput from "react-native-numeric-input"
import Rating from "../Components/Rating"
import Buttone from "../Components/Buttone"
import Review from "../Components/Review"
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({route}) {
  const [value, setValue ] = useState(0)
  const navigation= useNavigation()
  const product = route.params
  return (
    <Box safeArea flex={1} bg= {Colors.white}>
      <ScrollView px = {5} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image }} alt = "Image" w="full" h={300} resizeMode="contain"/>
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
          </Heading>
          <Rating value={4} />
          <HStack space={2} alignItems="center" my={5}>
            <NumericInput 
            value={value} 
            totalWidth={140} 
            totalHeight={30} 
            iconSize={25} 
            step={1} 
            maxValue={product.countInStock} 
            minValue={0} 
            borderColor={Colors.deepGray} 
            rounded 
            textColor={Colors.black} 
            iconStyle={{color:Colors.white}}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main} 
            />
             
            
          <Heading bold color = {Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
            
            
          
          </HStack>
          <Text lineHeight = {24} fontSize={12}>
          <Text bold>{product.followers} Followers  </Text>
          {"\n"}
          South Tampa Born and Raised 
          {"\n"}
          Trump 2024 
          {"\n"}
          UF 2021 
          {"\n"}
          Austin, Texas
          </Text>
          <Buttone bg={Colors.main} color={Colors.white} mt={10} onPress={()=> navigation.navigate('Cart')}>
            Add To Cart
            </Buttone>
          <Review/>
          

      </ScrollView>

    </Box>
  );
}

export default SingleProductScreen;