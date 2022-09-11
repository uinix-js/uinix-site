export const examples = {
  simple: {
    title: 'Simple',
    notes: [],
    style: {
      color: 'sienna',
    },
    themeSpec: {},
    theme: {},
    config: {},
  },
  'simple-themed': {
    title: 'Simple themed',
    notes: ['line 1', 'line 2', 'line 3'],
    style: {
      padding: 'm',
    },
    themeSpec: {
      colors: ['color'],
      spacings: ['padding'],
    },
    theme: {
      colors: {
        primary: 'sienna',
      },
      spacings: {
        s: '4px',
        m: '8px',
        l: '16px',
      },
    },
    config: {
      enableAtomicCss: true,
    },
  },
};
