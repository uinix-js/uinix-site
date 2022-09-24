const rules = {
  selectedTab: ({isSelected}) => ({
    color: isSelected ? 'brand.primary' : undefined,
    borderBottom: 'tab',
    borderColor: isSelected ? 'tab' : 'transparent',
  }),
  selfCentered: {
    alignSelf: 'center',
    justifySelf: 'center',
  },
};

const variants = {
  alphabet: {
    fontFamily: 'google',
    fontSize: 'xl',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'brand.primary',
    border: 'none',
    borderRadius: 'm',
    color: 'white',
    flex: 'none',
    fontFamily: 'google',
    fontSize: 'body',
    paddingBottom: 'x2',
    paddingLeft: 'x6',
    paddingRight: 'x6',
    paddingTop: 'x2',
    ':hover': {
      boxShadow: 'buttonLink.hovered',
    },
  },
  input: {
    fontFamily: 'body',
    fontSize: 'm',
  },
  gray: {
    color: 'text.gray1',
    fontSize: 'body',
  },
  grayLink: {
    color: 'text.gray1',
    fontSize: 'body',
    ':hover': {
      color: 'text.gray3',
    },
  },
  google: {
    fontFamily: 'google',
  },
  googleGray: {
    color: 'text.gray1',
    fontFamily: 'google',
  },
  grayEmphasized: {
    color: 'text.gray3',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 'subtitle',
  },
  subtitle2: {
    fontFamily: 'body',
    fontSize: 'subtitle2',
  },
  title: {
    color: 'text.primary',
    fontFamily: 'google',
    fontSize: 'title',
    lineHeight: 'title',
  },
};

const staticStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'brand.link',
  },
  body: {
    fontFamily: 'body',
    fontSize: 'body',
    lineHeight: 'body',
  },
  button: variants.button,
  cite: {
    fontStyle: 'normal',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontWeight: 'normal',
    lineHeight: 'heading',
    margin: 0,
    padding: 0,
  },
  hover: {
    ':hover': {
      backgroundColor: 'background.light',
    },
  },
  input: {
    ...variants.input,
    border: 'none',
    height: 'height.input',
    outline: 'none',
  },
  '[title]': {
    position: 'relative',
  },
  '[title]:hover::before': {
    backgroundColor: 'black',
    bottom: '-x8',
    borderRadius: 'm',
    color: 'white',
    content: 'attr(title)',
    fontSize: 's',
    paddingBottom: 'x1',
    paddingLeft: 'x2',
    paddingRight: 'x2',
    paddingTop: 'x1',
    position: 'absolute',
    right: '50%',
    transform: 'translateX(50%)',
    whiteSpace: 'nowrap',
  },
};

export const styles = {
  rules,
  static: staticStyles,
  variants,
};
