export const styles = {
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
  selectedTab: ({isSelected}) => ({
    color: isSelected ? 'brand.primary' : undefined,
    borderBottom: 'tab',
    borderColor: isSelected ? 'tab' : 'transparent',
  }),
  selfCentered: {
    alignSelf: 'center',
    justifySelf: 'center',
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
