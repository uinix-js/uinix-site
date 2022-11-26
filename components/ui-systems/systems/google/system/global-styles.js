import {styles} from './styles.js';

export const globalStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'brand.link',
  },
  body: {
    fontFamily: 'body',
    fontSize: 'body',
    lineHeight: 'body',
  },
  button: styles.button,
  cite: {
    fontStyle: 'normal',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'normal',
    lineHeight: 'heading',
    margin: 0,
    padding: 0,
  },
  hover: {
    ':hover': {
      backgroundColor: 'background.light',
    },
  },
  input: {
    ...styles.input,
    border: 'none',
    height: 'height.input',
    outline: 'none',
  },
  '[title]': {
    position: 'relative',
  },
  '[title]:hover::before': {
    backgroundColor: 'black',
    bottom: '-x8',
    borderRadius: 'm',
    color: 'white',
    content: 'attr(title)',
    fontSize: 's',
    paddingBottom: 'x1',
    paddingLeft: 'x2',
    paddingRight: 'x2',
    paddingTop: 'x1',
    position: 'absolute',
    right: '50%',
    transform: 'translateX(50%)',
    whiteSpace: 'nowrap',
  },
};
