export const globalStyles = {
  a: {
    color: 'interaction.link',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
  body: {
    fontFamily: 'body',
    fontWeight: 'body',
    fontSize: 'body',
    letterSpacing: 'body',
    lineHeight: 'body',
    '-mozFontFeatureSettings': 'kern',
    '-mozOsxFontSmoothing': 'grayscale',
  },
  button: {
    backgroundColor: 'interaction.button',
    border: 'none',
    borderRadius: 'pill',
    color: 'text.inverse',
    cursor: 'pointer',
    fontSize: 'body',
    fontWeight: 'body',
    paddingBottom: 'x2',
    paddingLeft: 'x4',
    paddingRight: 'x4',
    paddingTop: 'x2',
    width: 'min-content',
    ':hover': {
      backgroundColor: 'interaction.buttonHover',
    },
  },
  h1: {
    fontSize: 'h1',
    fontWeight: 'bolder',
    letterSpacing: 'h1',
    lineHeight: 'h1',
  },
  h2: {
    fontSize: 'h2',
    fontWeight: 'bolder',
    letterSpacing: 'h2',
    lineHeight: 'h2',
  },
  hr: {
    borderBottom: 'none',
    borderTop: 'dark',
  },
  select: {
    border: 'bordered',
    borderRadius: 'm',
    fontSize: 'subtitle',
    fontWeight: 'bold',
    letterSpacing: 'subtitle',
    lineHeight: 'subtitle',
    paddingBottom: 'x3',
    paddingLeft: 'x4',
    paddingRight: 'x4',
    paddingTop: 'x3',
  },
  'select:hover': {
    border: 'dark',
  },
  sup: {
    fontColor: 'text.secondary',
    fontSize: 'sup',
    fontWeight: 'body',
    lineHeight: 'sup',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  ol: {
    margin: 0,
    padding: 0,
  },
  'ol li': {
    listStylePosition: 'inside',
  },
};
