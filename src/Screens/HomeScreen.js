import { Text, View, NativeBaseProvider, Box} from "native-base";
import React from 'react';
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";

function HomeScreen() {
  return (
    
        <Box flex={1} bg={Colors.lightBlack} >
            <HomeSearch/>
            <HomeProducts/> 
        </Box>
    
  );
}

export default HomeScreen;