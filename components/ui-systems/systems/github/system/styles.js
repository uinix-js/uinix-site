import {createStyles} from 'uinix-ui';

import 'github-markdown-css/github-markdown-light.css';

import {typography} from './typography.js';

const rules = {
  caret: {
    '&::after': {
      borderBottom: '0 solid transparent',
      borderLeft: '4px solid transparent',
      borderRight: '4px solid transparent',
      borderTopStyle: 'solid',
      borderTopWidth: '4px',
      content: '""',
      display: 'inline-block',
      marginLeft: 's',
      height: 0,
      verticalAlign: 'middle',
      width: 0,
    },
  },
  hover: {
    ':hover': {
      backgroundColor: 'background.tertiary',
    },
  },
};

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'background.primary',
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
  'a:hover': {
    textDecoration: 'underline',
    opacity: 1,
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

const variants = {
  button: {
    default: {
      backgroundColor: 'background.secondary',
      color: 'text.primary',
      ':hover': {
        backgroundColor: 'hover.gray',
      },
    },
    primary: {
      color: 'white',
      backgroundColor: 'tone.success',
      ':hover': {
        backgroundColor: 'hover.success',
      },
    },
  },
  nav: {
    unset: {
      margin: 'unset',
      padding: 'unset',
    },
  },
  layout: {
    main: {
      minWidth: 0,
      maxWidth: 'width.main',
      width: '100%',
    },
  },
};

export const styles = createStyles({
  ...rules,
  global,
  typography,
  variants,
});
