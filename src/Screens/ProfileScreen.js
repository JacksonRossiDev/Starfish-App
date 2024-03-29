import { Center, Heading, Image, Text, View } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";

import { connect } from 'react-redux'
function ProfileScreen(props) {
  const {currentUser} = props;
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {currentUser.name}
        </Heading>
        <Text fontSize={13} bold  color={Colors.white}>
        {currentUser.email}
        </Text>
      </Center>
      {/* TABS */}
      <Tabs />
    </>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})

export default connect(mapStateToProps, null)(ProfileScreen)

