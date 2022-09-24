const rules = {
  footerSection: {
    minWidth: 'width.footerSection',
    width: '30%',
  },
  iconBackground: ({hasAccent}) => ({
    backgroundColor: hasAccent ? 'brand.primary' : 'brand.white',
    borderRadius: 'round',
    boxShadow: 'm',
    color: hasAccent ? 'brand.white' : 'brand.black',
    padding: 's',
    transition: 'cubicBezier',
    ':hover': {
      transform: 'iconScale',
    },
  }),
  iconBadge: {
    '&::after': {
      backgroundColor: 'currentColor',
      borderRadius: 'round',
      bottom: '-50%',
      content: '""',
      display: 'block',
      height: 'badge',
      left: '50%',
      position: 'absolute',
      transform: 'translateXHalf',
      width: 'badge',
    },
  },
};

const staticStyles = {
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

const variants = {
  icon: {
    interactive: ({color, isActive}) => ({
      color: isActive ? 'brand.primary' : color || 'icon.default',
      position: 'relative',
      ':hover': {
        color: isActive ? 'brand.primary' : color || 'icon.active',
        backgroundColor: 'transparent',
      },
    }),
  },
  text: {
    caps: {
      fontSize: 's',
      fontWeight: 'bold',
      letterSpacing: 'caps',
      lineHeight: 's',
      textTransform: 'uppercase',
    },
    nav: {
      color: 'text.secondary',
      fontSize: 'm',
      fontWeight: 'bold',
      lineHeight: 's',
      transition: 'default',
      ':hover': {
        color: 'text.primary',
      },
    },
    xs: {
      fontSize: 'xs',
      lineHeight: 's',
    },
    s: {
      fontSize: 's',
      fontWeight: 'normal',
      lineHeight: 's',
    },
    m: {
      fontSize: 'm',
      lineHeight: 'm',
    },
    xl: {
      color: 'text.primary',
      fontSize: 'xl',
      fontWeight: 'bold',
      lineHeight: 'l',
    },
    xxl: {
      color: 'text.primary',
      fontSize: 'xxl',
      fontWeight: 'bold',
      lineHeight: 'l',
    },
  },
};

export const styles = {
  rules,
  static: staticStyles,
  variants,
};
