import { Text, Box, View, Heading, NativeBaseProvider, ScrollView} from "native-base";
import React from 'react';
import Colors  from "../color"
import OrderInfo from "../Components/OrderInfo";
import {FontAwesome5} from "@expo/vector-icons"
import OrderItem from "../Components/OrderItem";
import OrderModel from "../Components/OrderModel";
import PlaceOrderModel from "../Components/PlaceOrderModel";

import { connect } from 'react-redux'

function PlaceOrderScreen(props) {
  const {currentUser} = props;
  return (
    <Box bg={Colors.backgroundPurple} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>

          <OrderInfo 
          title={"CUSTOMER"} 
          subTitle={currentUser.name} 
          text={currentUser.email}
          icon={<FontAwesome5 name="user" size = {30} color = {Colors.white} />}
          />
          <OrderInfo 
          title={"Order Info"} 
          subTitle={"Delivery: 3 Days"} 
          text={"Pay Method: Stripe"}
          icon={<FontAwesome5 name="shipping-fast" size = {30} color = {Colors.white} />}
          />
          <OrderInfo 
          title={"Delivery Info"} 
          subTitle={"Confirmation sent to"} 
          text={currentUser.email}
          icon={<FontAwesome5 name="paper-plane" size = {30} color = {Colors.white} />}
          />

        </ScrollView>
      </Box>
      {/* Order Item(s)*/}
      <Box px={6} flex = {1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          Products
        </Heading>
        <OrderItem/>
        {/*Total*/}
        <PlaceOrderModel/>
        
      </Box>
    </Box>
  );
  }
  const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
  })
  
  export default connect(mapStateToProps, null)(PlaceOrderScreen)