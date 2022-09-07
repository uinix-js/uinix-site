export const examples = {
  simple: {
    title: 'Simple',
    notes: [],
    style: {
      color: 'blue',
    },
    options: {
      themeSpec: {},
      theme: {},
    },
  },
  'simple-themed': {
    title: 'Simple themed',
    notes: ['line 1', 'line 2', 'line 3'],
    style: {
      color: 'primary',
      padding: 'm',
    },
    options: {
      enableAtomicCss: true,
      themeSpec: {
        colors: ['color'],
        spacings: ['padding'],
      },
      theme: {
        colors: {
          primary: 'blue',
        },
        spacings: {
          s: '4px',
          m: '8px',
          l: '16px',
        },
      },
    },
  },
};
