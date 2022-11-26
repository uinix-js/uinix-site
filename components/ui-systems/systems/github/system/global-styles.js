import 'github-markdown-css/github-markdown-light.css';

export const globalStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'background.primary',
    color: 'text.primary',
    fontFamily: 'body',
    fontSize: 'body',
    lineHeight: 'body',
    '-mozOsxFontSmoothing': 'unset',
  },
  a: {
    color: 'text.blue',
  },
  'a:hover': {
    textDecoration: 'underline',
    opacity: 1,
  },
  button: {
    border: 'bordered',
    borderRadius: 'm',
    boxShadow: 'button',
    cursor: 'pointer',
    fontSize: 'small',
    fontWeight: 'medium',
    minHeight: 'height.button',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
    padding: 0,
  },
  hr: {
    borderBottom: 'bordered',
    borderTop: 'none',
    margin: 0,
    width: '100%',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
};
