export const styles = {
  footerSection: {
    minWidth: 'width.footerSection',
    width: '30%',
  },
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
