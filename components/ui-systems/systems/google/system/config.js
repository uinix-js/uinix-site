import {createConfig} from 'uinix-ui';

export const config = createConfig({
  elementShorthandPropsMapping: {
    backgroundColor: ['bg'],
    borderRadius: ['borderRadius'],
    border: ['b'],
    borderBottom: ['bb', 'by', 'b'],
    borderLeft: ['bl', 'bx', 'b'],
    borderRight: ['br', 'bx', 'b'],
    borderTop: ['bt', 'by', 'b'],
    boxShadow: ['boxShadow'],
    color: ['color'],
    margin: ['m'],
    marginBottom: ['mb', 'my', 'm'],
    marginLeft: ['ml', 'mx', 'm'],
    marginRight: ['mr', 'mx', 'm'],
    marginTop: ['mt', 'my', 'm'],
    padding: ['p'],
    paddingBottom: ['pb', 'py', 'p'],
    paddingLeft: ['pl', 'px', 'p'],
    paddingRight: ['pr', 'px', 'p'],
    paddingTop: ['pt', 'py', 'p'],
    height: ['h'],
    minHeight: ['minH'],
    maxHeight: ['maxH'],
    width: ['w'],
    minWidth: ['minW'],
    maxWidth: ['maxW'],
    overflow: ['overflow'],
    position: ['position'],
    bottom: ['bottom'],
    left: ['left'],
    right: ['right'],
    top: ['top'],
    zIndex: ['z'],
    display: ['display'],
    flex: ['flex'],
  },
  elementStyles: [
    ({disabled}) =>
      disabled
        ? {
            opacity: '0.3',
            pointerEvents: 'none',
          }
        : null,
    ({onClick}) => ({
      cursor: onClick ? 'pointer' : undefined,
      ':hover': {
        opacity: onClick ? '0.8' : undefined,
      },
    }),
  ],
});
