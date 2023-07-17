import React from "react";
import { Box, Text, Button, Container, chakra, Flex, SimpleGrid, Image, Icon, Grid, GridItem } from "@chakra-ui/react";
import Card from "../components/card"

function Portfolio() {
  return (
    <Box  ml={80} mr={80} mt={8}>
              <Text fontFamily='Sans-serif' fontSize='30px' letterSpacing='wide'>
Portfolio
    </Text>


    <Grid templateColumns='repeat(3, 1fr)' gap={9}>
  <GridItem w='100%' h='100%' bg='blue.100'><Card/></GridItem>
  <GridItem w='100%' h='100%' bg='blue.100' />
  <GridItem w='100%' h='100%' bg='blue.100' />

  </Grid>
    </Box>
  );
}

export default Portfolio;