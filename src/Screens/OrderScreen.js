import { Box, Heading, ScrollView, Text, View, Center } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderModel from "../Components/OrderModel";

function OrderScreen() {
  return (
    <Box bg={Colors.backgroundPurple} flex={1} safeArea pt={6}>
      <Box>
      <Center w="full" py={5}>
            <Text color={Colors.black} fontSize = {20} bold>
              Confirm Order
            </Text>
          </Center>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="DELIVERY INFO"
            success
            subTitle="Delivery: Email"
            text="Pay Method: PayPal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Email Address:"
            danger
            text="jackson@jacksonrossi.com"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Iterm */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* Total */}
        <OrderModel />
      </Box>
    </Box>
  );
}

export default OrderScreen;
