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
      fontFamily: 'source-code-pro, monospace',
    },
  },
  components: {
    Text: {
      baseStyle: {
        fontFamily:
          '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        width: ['clamp(30ch, 90%, 40ch)', 'clamp(45ch, 70%, 75ch)'],
        wordWrap: 'break-word',
        mt: '0.5em',
        mb: '0.5em',
      },
    },
  },
});

export default theme;
