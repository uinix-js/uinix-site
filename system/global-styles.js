import {styles} from './styles.js';

const vendor = {
  '#__next': {
    backgroundColor: 'inherit',
  },
  '.icon-link::before': {
    content: '"#"',
    marginRight: 's',
  },
};

export const globalStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'text.link',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'fade',
  },
  'a:hover': {
    opacity: 'interactive',
  },
  body: {
    backgroundColor: 'background.primary',
    color: 'text.body',
    fontFamily: 'body',
    fontSize: 'm',
    lineHeight: 'body',
    margin: 0,
    padding: 0,
  },
  blockquote: {
    backgroundColor: 'background.wash',
    borderLeft: 'border',
    borderColor: 'brand.primary',
    borderWidth: 'l',
    fontStyle: 'italic',
    margin: 0,
    paddingBottom: 's',
    paddingLeft: 'l',
    paddingTop: 's',
  },
  code: {
    backgroundColor: 'background.wash',
    fontFamily: 'code',
  },
  hr: {
    border: 'none',
    borderBottom: 'border',
    marginBottom: 'xl',
    marginTop: 'xl',
    width: '100%',
  },
  html: {
    scrollPaddingTop: 'offsets.navLinks.height',
  },
  input: styles.input,
  'input:focus': styles.interactive[':focus'],
  'input:hover': styles.interactive[':hover'],
  'nav ul,ol': {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  pre: {
    backgroundColor: 'background.wash',
    fontFamily: 'code',
    fontSize: 's',
    maxHeight: '1000px',
    overflowY: 'auto',
    whiteSpace: 'pre-wrap',
  },
  select: styles.input,
  'select:focus': styles.interactive[':focus'],
  'select:hover': styles.interactive[':hover'],
  ...vendor,
};
