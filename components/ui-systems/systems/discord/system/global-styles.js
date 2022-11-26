import {styles} from './styles.js';

export const globalStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'text.link',
  },
  body: {
    backgroundColor: 'background.tertiary',
    color: 'text.normal',
    fontSize: 'body',
    lineHeight: 'l',
    textRendering: 'optimizeLegibility',
    '-mozOsxFontSmoothing': 'unset',
  },
  button: styles.button.primary,
  'a:hover': {
    textDecoration: 'underline',
  },
  code: {
    backgroundColor: 'background.secondary',
    fontFamily: 'monospace',
    color: 'header.secondary',
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
  },
  h1: {
    color: 'header.primary',
    fontSize: 'l',
    fontWeight: 'bold',
    lineHeight: 'l',
  },
  h2: {
    color: 'channel.default',
    fontSize: 'm',
    fontWeight: 'bold',
    lineHeight: 'm',
    textTransform: 'uppercase',
  },
  hr: {
    borderColor: 'background.modifier.accent',
    borderWidth: 'm',
  },
  summary: {
    fontSize: 'title',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  // Title tooltip
  '[title]:hover::before': {
    display: 'none',
  },
};
