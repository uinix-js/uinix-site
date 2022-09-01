export const typography = {
  global: {
    a: {
      color: 'text.link',
    },
    body: {
      color: 'text.normal',
      fontSize: 'body',
      lineHeight: 'l',
      textRendering: 'optimizeLegibility',
      '-mozOsxFontSmoothing': 'unset',
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
  },
  variants: {
    channelName: {
      fontSize: 'body',
      fontWeight: 'medium',
      lineHeight: 'l',
      ':hover': {
        color: 'interactive.hover',
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
  },
};
