import React from "react";
import { Box, Text, Button, Container, chakra, Flex, SimpleGrid, Image, Icon, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from "@chakra-ui/react";

function Resume() {
  return (
<Box  ml={80} mr={80} mt={8}>
<Text fontFamily='Sans-serif' fontSize='30px' letterSpacing='wide'>
Resume
    </Text>
    <Text pt={6} letterSpacing='wide' fontSize='22px'>
Front-End Proficiencies
    </Text>
    <UnorderedList fontSize='20px'>
      <ListItem>HTML</ListItem>
      <ListItem>CSS</ListItem>
      <ListItem>JavaScript</ListItem>
      <ListItem>jQuery</ListItem>
      <ListItem>Responsive design</ListItem>
      <ListItem>React</ListItem>
      <ListItem>Bootstrap</ListItem>
</UnorderedList>

<Text pt={6} letterSpacing='wide' fontSize='22px'>
Back-End Proficiencies
    </Text>
    <UnorderedList fontSize='20px'>
      <ListItem>API's</ListItem>
      <ListItem>Node.js</ListItem>
      <ListItem>Express</ListItem>
      <ListItem>MySQL, Sequelize</ListItem>
      <ListItem>MongoDB, Mongoose</ListItem>
      <ListItem>REST</ListItem>
      <ListItem>GraphQL</ListItem>
</UnorderedList>

</Box>
  );
}

export default Resume;