const shared = {
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
};

export const styles = {
  button: {
    primary: shared.button,
    secondary: {
      ...shared.button,
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
  flexFit: {
    minWidth: 0,
    width: '100%',
  },
  hover: {
    ':hover': {
      backgroundColor: 'background.modifier.hover',
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
  scrollable: ({scrollbarWidth = 'thin'}) => ({
    height: 'height.viewport',
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollbarWidth,
  }),
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
