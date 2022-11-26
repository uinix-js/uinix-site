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

export const styles = {
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
