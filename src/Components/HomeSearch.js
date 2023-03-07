import React from 'react'
import {Text, HStack, Input, Box, Pressable} from 'native-base'
import  Colors from '../color'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function HomeSearch() {
  const navigation = useNavigation()
  return (
    <HStack space = {3} w = "full" px = {6} bg = {Colors.main} py = {4} alignItems="center" safeAreaTop>
    <Input placeholder="Justin Beiber, Lana Rhoades, Andrew Tate..." 
    w="85%" 
    bg = {Colors.white} 
    type="search" 
    h={12} 
    variant = "filled"
    borderWidth={0} 
    _focus = {{
        bg:Colors.white,
    }}


        />
    
<Pressable ml={3}>
<FontAwesome5 name="shopping-basket" size = {24} color={Colors.white} onPress={()=> navigation.navigate("Cart")}></FontAwesome5>
<Box px={1} 
rounded ="full" 
position = "absolute" 
top={-13} 
left = {2} 
bg = {Colors.red}
    _text = {{
        color: Colors.white, 
        fontSize:'11px',
    }}
    >
        4
        </Box>
    </Pressable>
</HStack>
  )
}

export default HomeSearch