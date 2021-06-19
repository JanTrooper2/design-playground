import React from 'react';
import {
  Flex,
  Text,
  Heading,
  Button,
  useColorModeValue,
  FormControl,
  Input,
  IconButton,
  ScaleFade,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons';
const DailyAdvice = props => {
  return (
    <Text p="4" rounded={6} background={props.background}>
      Sample Advice (hard-coded)
    </Text>
  );
};
const PersonalAdvice = props => {
  return (
    <Text p="4" rounded={6} background={props.background}>
      Your personal Advice
    </Text>
  );
};
const Advice = () => {
  const containerBackground = useColorModeValue('gray.100', 'gray.700');
  const textBackground = useColorModeValue('green.200', 'green.700');
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Flex direction="column" height="100vh" width="100%" align="center">
      <Heading as="h1" textDecoration="underline" p="10">
        Advice
      </Heading>
      <Flex
        direction="column"
        background={containerBackground}
        p={10}
        rounded={6}
      >
        <Heading textStyle="h2" mb={6}>
          Advice of the Day
        </Heading>
        <Center>
          <DailyAdvice background={textBackground} />
        </Center>
      </Flex>
      <Flex
        m="10"
        rounded="6"
        background={containerBackground}
        direction="column"
      >
        <Button onClick={onToggle} m="10" colorScheme="teal">
          Personal Advice
        </Button>
        <ScaleFade initialScale={0.8} in={isOpen} unmountOnExit>
          <Center>
            <PersonalAdvice
              source="https://api.adviceslip.com/advice/20"
              background={textBackground}
            />
          </Center>
        </ScaleFade>
      </Flex>

      <Flex
        direction="column"
        background={containerBackground}
        p={10}
        rounded={6}
      >
        <Heading mb="5" textAlign="center">
          Search
        </Heading>
        <Flex as="form">
          <FormControl>
            <Input placeholder="Search Term" />
          </FormControl>
          <IconButton
            type="submit"
            ml="3"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export {DailyAdvice, PersonalAdvice};
export default Advice;
