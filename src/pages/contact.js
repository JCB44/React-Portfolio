import React, { useState } from 'react';
import { Box, Text, Button, Container, chakra, Flex, SimpleGrid, Image, Icon, FormErrorMessage, ButtonFormControl, FormLabel, Input, FormControl } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { isEmail } from 'validator';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data) => {
    setSubmitting(true);
    // Perform form submission or other actions here
    setTimeout(() => {
      console.log(data);
      setSubmitting(false);
    }, 2000);
  };

  const validateEmail = (value) => {
    if (!isEmail(value)) {
      return 'Invalid email format';
    }
    return true;
  };


  return (
    <Box  ml={80} mr={80} mt={8}>
       <Text fontFamily='Sans-serif' fontSize='30px' letterSpacing='wide'>
Contact me Here!
    </Text>
    <Box p={4} maxWidth="400px" mx="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} mb={4}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input {...register('name', { required: 'Name is required' })} id="name" />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input {...register('email', { required: 'Email is required', validate: validateEmail })} id="email" />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Input {...register('message')} id="message" />
        </FormControl>

        <Button type="submit" colorScheme="teal" isLoading={submitting}>
          Submit
        </Button>
      </form>
    </Box>
    </Box>
    
    
    
    );
}

export default Contact;