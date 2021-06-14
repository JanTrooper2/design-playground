import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
      color: 'red',
    },
    code: {
      fontFamily: 'source-code-pro',
    },
  },
  components: {
    Text: {
      baseStyle: {
        width: 'clamp(45ch, 50%, 75ch)',
        wordWrap: 'break-word',
        mt: '0.5em',
        mb: '0.5em',
      },
    },
  },
});

export default theme;
