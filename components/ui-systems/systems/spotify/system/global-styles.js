export const globalStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'text.primary',
  },
  'a:hover': {
    opacity: 'visible',
    cursor: 'pointer',
  },
  body: {
    backgroundColor: 'background.gray4',
    color: 'text.secondary',
    fontFamily: 'body',
    letterSpacing: 'normal',
    '-mozOsxFontSmoothing': 'grayscale',
  },
  button: {
    backgroundColor: 'brand.primary',
    border: 'none',
    borderRadius: 'pill',
    fontSize: 'l',
    fontWeight: 'bold',
    color: 'text.primary',
    paddingBottom: 's',
    paddingLeft: 'l',
    paddingRight: 'l',
    paddingTop: 's',
    transition: 'default',
  },
  'button:hover': {
    backgroundColor: 'hover.primary',
  },
  code: {
    backgroundColor: 'background.gray1',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
  },
  '[title]:hover::before': {
    content: 'none',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
};
