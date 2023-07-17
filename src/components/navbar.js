import React from "react";
import "../App.css"
import {Link} from "react-router-dom"
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Heading,
  Spacer,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";

const Navbar = () => {
    const bg = useColorModeValue("blue", "black");
    const mobileNav = useDisclosure();
  
    return (
<React.Fragment>
    <chakra.header w="full" h='100px'>
        <Flex  minWidth='max-content' alignItems='center' gap='2' flexDirection="column-reverse">
        <Box p='2'>
        <Heading size='md'>Joshua Butts</Heading>
        </Box>

        <Spacer />

        <ButtonGroup gap='2'>

            <Button w="full" variant="ghost">
                   <Link to = "/">About Me</Link>
                 </Button>
           <Button w="full" variant="ghost">
                  <Link to = "/portfolio">Portfolio</Link>
                 </Button>
            <Button w="full" variant="ghost">
                   <Link to = "/resume">Resume</Link>
                 </Button>
           <Button w="full" variant="ghost">
                   <Link to = "/contact">Contact</Link>
                 </Button>

        </ButtonGroup>

        </Flex>
    </chakra.header>
</React.Fragment>
    )
}
export default Navbar;