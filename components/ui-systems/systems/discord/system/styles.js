const rules = {
  flexFit: {
    minWidth: 0,
    width: '100%',
  },
  hover: {
    ':hover': {
      backgroundColor: 'background.modifier.hover',
    },
  },
  scrollable: ({scrollbarWidth = 'thin'}) => ({
    height: 'height.viewport',
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollbarWidth,
  }),
};

const global = {
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
  button: {
    backgroundColor: 'brand.blurple',
    border: 'none',
    borderRadius: 's',
    color: 'text.normal',
    fontSize: 'body',
    fontWeight: 'medium',
    lineHeight: 'l',
    paddingBottom: 's',
    paddingLeft: 'm',
    paddingRight: 'm',
    paddingTop: 's',
    '-mozOsxFontSmoothing': 'unset',
    transition: 'color.default',
    ':hover': {
      backgroundColor: 'background.primaryHovered',
    },
  },
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

const variants = {
  button: {
    primary: global.button,
    secondary: {
      ...global.button,
      backgroundColor: 'background.primary',
      color: 'interactive.active',
      lineHeight: 'm',
      ':hover': {
        backgroundColor: 'background.secondary',
      },
    },
  },
  channelName: {
    fontSize: 'body',
    fontWeight: 'medium',
    lineHeight: 'l',
    ':hover': {
      color: 'interactive.hover',
    },
  },
  input: {
    search: {
      backgroundColor: 'background.tertiary',
      border: 'none',
      color: 'text.normal',
      fontFamily: 'body',
      fontSize: 'm',
      outline: 'none',
      width: '100%',
    },
    channelTextArea: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'text.normal',
      fontFamily: 'body',
      fontSize: 'l',
      outline: 'none',
      width: '100%',
    },
  },
  message: {
    fontSize: 'message.m',
    lineHeight: 'message',
  },
  messageTime: {
    color: 'text.muted',
    fontSize: 'message.s',
    fontWeight: 'medium',
    lineHeight: 'message',
  },
  tag: {
    backgroundColor: 'brand.blurple',
    borderRadius: 's',
    color: 'brand.fullWhite',
    fontSize: 's',
    paddingLeft: 'xs',
    paddingRight: 'xs',
    textTransform: 'uppercase',
  },
  server: {
    fontSize: 'l',
    fontWeight: 'bold',
    lineHeight: 'l',
  },
  userMedium: {
    fontSize: 'body',
    fontWeight: 'medium',
    lineHeight: 'm',
  },
  userLarge: {
    fontSize: 'l',
    fontWeight: 'medium',
    lineHeight: 'l',
  },
  userActivity: {
    color: 'channel.default',
    fontSize: 's',
    fontWeight: 'medium',
    lineHeight: 's',
  },
};

export const styles = {
  global,
  rules,
  variants,
};
