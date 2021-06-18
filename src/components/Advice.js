import React from 'react';
import {Flex, Text, Heading, useColorModeValue} from '@chakra-ui/react';

const Advice = props => {
  const blogBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={blogBackground} p={10} rounded={6}>
        <Heading textStyle="h2" mb={6}>
          Blog
        </Heading>
        <Text>Dis some good shit</Text>

        {props.children}
      </Flex>
    </Flex>
  );
};

export default Advice;
