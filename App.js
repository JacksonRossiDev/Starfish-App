
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeBaseProvider, StatusBar } from 'native-base';
import BottomNav from './src/Navigations/BottomNav';
import LoginScreen from './src/Screens/LoginScreen'
import OrderScreen from './src/Screens/OrderScreen'
import RegisterScreen from './src/Screens/RegisterScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <NativeBaseProvider >
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator 
          initialRouteName = "Login" 
          screenOptions={{
          headerShown:false
        }}
        >
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="order" component={OrderScreen}/>
          <Stack.Screen name="Bottom" component={BottomNav}/>
          
        </Stack.Navigator>

      </NavigationContainer>
  </NativeBaseProvider>
  )
}