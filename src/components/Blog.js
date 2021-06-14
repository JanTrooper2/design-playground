// import axios from 'axios';
import React from 'react';
import {Flex, Text, Heading, useColorModeValue} from '@chakra-ui/react';

const Blog = props => {
  // const [loading, setLoading] = useState(true);
  // const convertPromiseToValue = async () => {
  //   let cachedNotes = await fetchNotes;
  //   cachedNotes = cachedNotes.map(note => {
  //     return (
  //       <figure className={'blogEntry note-' + note.id} key={note.id}>
  //         <h3>{note.title}</h3>
  //         <p>{note.body}</p>
  //       </figure>
  //     );
  //   });
  //   setNotes(cachedNotes);
  //   setLoading(false);
  // };
  // const fetchNotes = axios
  //   .get('http://localhost:5000/blogs')
  //   .then(response => response.data);

  // const [notes, setNotes] = useState(convertPromiseToValue);
  const blogBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={blogBackground} p={10} rounded={6}>
        <Heading textStyle="h2" mb={6}>
          Blog
        </Heading>
        <Text>Dis some good shit</Text>

        {props.children}
        {/* {!loading && notes} */}
      </Flex>
    </Flex>
  );
};

export default Blog;
