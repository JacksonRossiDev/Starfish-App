import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View} from 'react-native';
import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native';
import Buttone from "../Components/Buttone";
import Colors from "../color";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


export default StripeScreen = () => {
  const [card, setCard] = useState(CardFieldInput.Details | null);
  const { confirmPayment, handleCardAction } = useStripe()
  const API_URL = "http://localhost:3002";
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();


  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };
  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();
    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      merchantDisplayName: 'StarFish',
      paymentIntentClientSecret: paymentIntent,
    });
    if (!error) {
      setLoading(true);
    }
  };
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet({ clientSecret });
    
      Alert.alert('Success', 'Your order is confirmed!');
    
  };
  useEffect(() => {
    initializePaymentSheet();
  }, []);
  return (
    <View style={styles.container} >
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          setCard(cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
        
        <Buttone bg = {Colors.main} color={Colors.black} onPress={()=>navigation.navigate("Home")}> 
      Checkout
      </Buttone>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 20,
     marginHorizontal: 10,
     marginVertical: 10,
     justifyContent: 'center'
  },
  button: {
     backgroundColor: '#00aeef',
     borderColor: 'red',
     borderWidth: 5,
     borderRadius: 15       
  }
})