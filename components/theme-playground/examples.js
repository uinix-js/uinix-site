export const examples = [
  {
    title: 'Unthemed style',
    notes: [
      'This is a simple example rendering an unthemed style.',
      'There are no configurations applied for this example.',
    ],
    style: {
      border: '1px solid slategray',
      color: 'slategray',
      padding: '16px',
    },
    themeSpec: {},
    theme: {},
    config: {},
  },
  {
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
];
