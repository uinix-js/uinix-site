import 'github-markdown-css/github-markdown-light.css';

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

const staticStyles = {
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
    text: {
      fontSize: 'small',
      fontWeight: 'medium',
    },
  },
  layout: {
    main: {
      minWidth: 0,
      maxWidth: 'width.main',
      width: '100%',
    },
  },
  link: {
    color: 'text.tertiary',
    cursor: 'pointer',
    ':hover': {
      color: 'text.blue',
    },
  },
  linkBold: {
    color: 'text.primary',
    cursor: 'pointer',
    fontWeight: 'bold',
    ':hover': {
      color: 'text.blue',
    },
  },
  linkText: {
    cursor: 'pointer',
    ':hover': {
      color: 'text.blue',
    },
  },
  nav: {
    unset: {
      margin: 'unset',
      padding: 'unset',
    },
  },
  navItem: {
    fontSize: 'body',
    lineHeight: 'navItem',
  },
  pill: {
    backgroundColor: 'background.blueWash',
    borderRadius: 'pill',
    color: 'text.blue',
    cursor: 'pointer',
    fontSize: 's',
    paddingBottom: 'xxs',
    paddingLeft: 'pill.x',
    paddingRight: 'pill.x',
    paddingTop: 'xxs',
    ':hover': {
      backgroundColor: 'hover.blueWash',
    },
  },
  small: {
    color: 'text.secondary',
    fontSize: 'small',
  },
  subtitle: {
    color: 'text.primary',
    fontSize: 'subtitle',
  },
  title: {
    color: 'text.primary',
    fontWeight: 'normal',
    fontSize: 'title',
    whiteSpace: 'nowrap',
  },
};

export const styles = {
  rules,
  static: staticStyles,
  variants,
};
