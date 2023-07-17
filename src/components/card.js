import React from "react";
import { Box, Flex, Image, Link, chakra, Text } from "@chakra-ui/react";
import { aboutIMG } from "../assets/data/data.js"

const Card = () => {
    return (
<Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
        {/* <Image fit="scale-down" src={aboutIMG.image} alt="picture of Joshua Butts" border='2px'/> */}

       

    </Flex>
    )
}
export default Card;