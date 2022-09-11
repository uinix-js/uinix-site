import {createStyles} from 'uinix-ui';

const breakpoints = ['768px'];

const shared = {
  interactive: {
    cursor: 'pointer',
    outline: 'none',
    ':focus': {
      borderWidth: 'm',
      outline: 'border',
    },
    ':hover': {
      opacity: 'interactive',
    },
  },
};

const rules = {
  disabled: {
    opacity: 'disabled',
  },
  grid: ({columns, columnGap = 'm', rowGap = 'm'}) => ({
    display: 'grid',
    gridTemplateColumns: [`repeat(1, 1fr)`, `repeat(${columns}, 1fr)`],
    columnGap,
    rowGap,
  }),
  input: {
    backgroundColor: 'inherit',
    border: 'border',
    color: 'inherit',
    ...shared.interactive,
  },
  interactive: shared.interactive,
  sticky: {
    top: {
      backgroundColor: 'inherit',
      position: 'sticky',
      top: 0,
      zIndex: 'forward',
    },
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

const vendor = {
  '#__next': {
    backgroundColor: 'inherit',
  },
  '.icon-link::before': {
    content: '"#"',
    marginRight: 's',
  },
};

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'text.link',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'fade',
  },
  'a:hover': {
    opacity: 'interactive',
  },
  body: {
    backgroundColor: 'background.primary',
    color: 'text.body',
    fontFamily: 'body',
    fontSize: 'm',
    lineHeight: 'body',
    margin: 0,
    padding: 0,
  },
  blockquote: {
    backgroundColor: 'background.wash',
    borderLeft: 'border',
    borderColor: 'brand.primary',
    borderWidth: 'l',
    fontStyle: 'italic',
    margin: 0,
    paddingBottom: 's',
    paddingLeft: 'l',
    paddingTop: 's',
  },
  code: {
    backgroundColor: 'background.wash',
    fontFamily: 'code',
  },
  hr: {
    border: 'none',
    borderBottom: 'border',
    marginBottom: 'xl',
    marginTop: 'xl',
    width: '100%',
  },
  html: {
    scrollPaddingTop: 'offsets.navLinks.height',
  },
  input: rules.input,
  'input:focus': rules.interactive[':focus'],
  'input:hover': rules.interactive[':hover'],
  'nav ul,ol': {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  pre: {
    backgroundColor: 'background.wash',
    fontFamily: 'code',
    fontSize: 's',
    whiteSpace: 'pre-wrap',
  },
  select: rules.input,
  'select:focus': rules.interactive[':focus'],
  'select:hover': rules.interactive[':hover'],
  ...vendor,
};

const variants = {
  sticky: rules.sticky,
};

export const styles = createStyles({
  breakpoints,
  global,
  variants,
  ...rules,
});
