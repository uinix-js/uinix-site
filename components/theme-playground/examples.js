export const examples = [
  {
    value: 'default',
    label: 'Default',
    notes: [],
    style: {},
    options: {
      theme: {},
      themeSpec: {},
    },
  },
  {
    value: 'simple',
    label: 'Simple themed',
    notes: ['line 1', 'line 2', 'line 3'],
    style: {
      color: 'primary',
      padding: 'm',
    },
    options: {
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
      themeSpec: {
        colors: ['color'],
        spacings: ['padding'],
      },
    },
  },
];
