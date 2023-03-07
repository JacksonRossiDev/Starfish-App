import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Notifications/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEWS
      </Heading>
      {/* IF THERE IS NO REVIEW */}
       {/* <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"NO REVIEW"}
      />  */}
      {/* REVIEW */}
      <Box p={3} bg={Colors.homescreenBackground} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Rex Dropshipping
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "NativeBase Icons was designed to make integration of icons in nativebase projects easier."
          }
        />
      </Box>
      {/* WRITE REVIEW */}
       <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS INFLUENCER
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.white}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.white,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This post was good ....."
              borderWidth={0}
              bg={Colors.white}
              py={4}
              _focus={{
                bg: Colors.white,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone>
          <Message
            color={Colors.white}
            bg={Colors.black}
            children={"You Must Order This Influencer to Write a Review"}
          />
        </VStack>
      </Box> 
    </Box>
  );
}
