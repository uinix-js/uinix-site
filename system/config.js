import {createElement} from 'react';

import {styles} from './styles.js';

export const config = {
  createElement,
  elementShorthandPropsMapping: {
    backgroundColor: ['bg'],
    border: ['b'],
    borderBottom: ['bb'],
    boxShadow: ['boxShadow'],
    color: ['color'],
    flex: ['flex'],
    height: ['h'],
    margin: ['m'],
    marginBottom: ['mb', 'my', 'm'],
    marginLeft: ['ml', 'mx', 'm'],
    marginRight: ['mr', 'mx', 'm'],
    marginTop: ['mt', 'my', 'm'],
    maxHeight: ['maxH'],
    maxWidth: ['maxW'],
    minHeight: ['minH'],
    minWidth: ['minW'],
    overflowY: ['overflowY'],
    padding: ['p'],
    paddingBottom: ['pb', 'py', 'p'],
    paddingLeft: ['pl', 'px', 'p'],
    paddingRight: ['pr', 'px', 'p'],
    paddingTop: ['pt', 'py', 'p'],
    width: ['w'],
  },
  elementStyles: [
    ({disabled}) => (disabled ? styles.disabled : null),
    ({onClick}) => (onClick ? styles.interactive : null),
  ],
  enableAtomicCss: false,
  enableCssVariables: true,
  namespace: 'uinix',
  responsiveBreakpoints: ['768px'],
  responsiveCssProperties: ['gridTemplateColumns'],
};
