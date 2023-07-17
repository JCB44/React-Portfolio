import React from "react";
import { Box, Text, Button, Container, chakra, Flex, SimpleGrid, Image, Icon } from "@chakra-ui/react";
import { aboutIMG } from "../assets/data/data.js"

function About() {
  return (
    <Box  ml={80} mr={80} mt={8}>
    <Text fontFamily='Sans-serif' fontSize='30px' letterSpacing='wide'>
About me
    </Text>
<Image h="120px" w="120px" fit="scale-down" src={aboutIMG.image} alt="picture of Joshua Butts"  borderRadius='full' border='2px'/>

<Text pt={6} letterSpacing='wide' fontSize='18px'>
Hello, I'm Joshua Butts, a website coder based in Austin, Texas. I have a passion for building and creating websites that are both visually appealing and functionally robust. With a keen eye for design and a love for coding, I strive to bring ideas to life on the web.

I enjoy working on various web development projects, ranging from simple static websites to dynamic web applications. Utilizing my skills in HTML, CSS, JavaScript, and other web technologies, I aim to deliver engaging and user-friendly digital experiences.

Living in Austin, Texas, provides me with a vibrant and innovative tech scene, which constantly inspires and challenges me to stay up-to-date with the latest industry trends and techniques. I find great satisfaction in collaborating with clients and fellow developers to create innovative solutions that meet their unique needs.

When I'm not coding, you can find me exploring the beautiful city of Austin, discovering new coffee shops, or immersing myself in nature. I believe in the power of continuous learning and growth, and I'm always seeking opportunities to expand my skill set and stay ahead in the ever-evolving field of web development.

If you have a web project in mind or if you simply want to connect and discuss all things web development, I would love to hear from you. Let's bring your ideas to life on the web!
  </Text>
    </Box>
  );
}

export default About;