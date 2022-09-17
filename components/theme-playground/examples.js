export const examples = [
  {
    title: 'Empty example',
    notes: [
      'Edit this blank example and style the left preview panel to test your knowledge on uinix-theme!',
    ],
    config: {},
    themeSpec: {},
    theme: {},
    style: {},
  },
  {
    title: 'Unthemed style',
    notes: [
      'This is a simple example rendering an unthemed style.',
      'There are no theme configurations applied for this example.',
    ],
    config: {},
    themeSpec: {},
    theme: {},
    style: {
      border: '1px solid slategray',
      color: 'slategray',
      padding: '16px',
    },
  },
  {
    title: 'Modern CSS-in-JS syntax',
    notes: [
      'This example showcases modern CSS-in-JS syntax supported in uinix-theme (e.g. pseudo-class, pseudo-element, attribute selector, child selector, "self" selector, nestable expressions).',
      'There are no theme configurations applied for this example.',
    ],
    config: {},
    themeSpec: {},
    theme: {},
    style: {
      color: 'slategray',
      '& strong': {
        color: 'slateblue',
        ':hover': {
          color: 'indigo',
          textDecoration: 'underline',
        },
        '::after': {
          content: '"!!!"',
        },
      },
      '& p[data-attribute="preview"]': {
        color: 'maroon',
      },
    },
  },
  {
    title: 'Themed style (simple)',
    notes: [
      'To render a themed style, we need to specify a meaningful theme spec and theme.',
      'We first specify the mapping of theme properties to CSS properties in the theme spec.',
      'We next specify the mapping of theme properties to CSS values in the theme.',
      'A themed style can now be defined using theme values (it can still contain CSS values).',
      'A themed style is resolved by checking if the assigned theme value can be found through the mappings defined by the theme spec and theme.',
    ],
    config: {},
    themeSpec: {
      colors: ['backgroundColor', 'color'],
      spacings: ['padding'],
    },
    theme: {
      colors: {
        background: 'linen',
        text: 'dimgray',
      },
      spacings: {
        s: '8px',
        m: '16px',
        l: '32px',
      },
    },
    style: {
      backgroundColor: 'background',
      color: 'text',
      padding: 'l',
    },
  },
  {
    title: 'Themed style (advanced)',
    notes: [
      'This example extends the Example 4.',
      'Theme values can be nested under the theme (for organization).',
      'A themed style can be defined with theme values via object property paths.',
      'A themed style can be authored in modern CSS-in-JS expressions. (see Example 3).',
    ],
    config: {},
    themeSpec: {
      colors: ['backgroundColor', 'color'],
      spacings: ['padding'],
    },
    theme: {
      colors: {
        background: {
          primary: 'linen',
          emphasis: 'wheat',
        },
        text: {
          primary: 'dimgray',
          emphasis: 'maroon',
        },
      },
      spacings: {
        s: '8px',
        m: '16px',
        l: '32px',
      },
    },
    style: {
      backgroundColor: 'background.primary',
      color: 'text.primary',
      padding: 'l',
      '& strong': {
        backgroundColor: 'background.emphasis',
        color: 'text.emphasis',
        cursor: 'hover',
        padding: 'm',
        ':hover': {
          color: 'text.primary',
        },
      },
    },
  },
  {
    title: 'Themed styles (CSS keyframes)',
    notes: [
      'To render themed styles with animated CSS keyframes, configure the theme spec and theme appropriately.',
      'Specify in the theme spec the "animation" and "animationName" CSS properties to their theme properties (we recommend using "animations" and "keyframes" as canonical theme properties).',
      'Specify the mapping of CSS values to these theme properties in the theme.  Author CSS keyframes in JS notation (i.e. as an object).',
      'In a themed style, specify the appropriate theme values defined earlier.  We take advantage of the fact that the "animationName" CSS property overrides the "animation" shorthand CSS property',
      'You can nest theme values just as you could for any themed style (see Example 5).',
    ],
    config: {},
    themeSpec: {
      animations: ['animation'],
      keyframes: ['animationName'],
    },
    theme: {
      animations: {
        linear: {
          infinite: '2s linear infinite',
        },
      },
      keyframes: {
        opacity: {
          flicker: {
            '0%': {opacity: '0'},
            '50%': {opacity: '1'},
            '100%': {opacity: '0'},
          },
        },
      },
    },
    style: {
      '& p': {
        animation: 'linear.infinite',
        animationName: 'opacity.flicker',
      },
    },
  },
  {
    title: 'Themed style (CSS variables)',
    notes: [
      'To enable rendering themed styles via CSS variables instead of CSS values, specify this in the config.',
      'The mapping defined in the theme creates CSS variables in the root element.',
      'The themed style is now resolved to these CSS variables and can be verified in the DOM inspector.',
    ],
    config: {
      enableCssVariables: true,
    },
    themeSpec: {
      colors: ['backgroundColor', 'color'],
      spacings: ['padding'],
    },
    theme: {
      colors: {
        background: 'linen',
        text: 'dimgray',
      },
      spacings: {
        s: '8px',
        m: '16px',
        l: '32px',
      },
    },
    style: {
      backgroundColor: 'background',
      color: 'text',
      padding: 'l',
    },
  },
  {
    title: 'Responsive style',
    notes: [
      'To enable responsive styles, specify responsive CSS properties and breakpoints in the config.',
      'Specify responsive style values in array syntax corresponding to the specified breakpoints.',
      'Resize the browser to observe the responsive styles in action.',
    ],
    config: {
      responsiveBreakpoints: ['800px', '1200px'],
      responsiveCssProperties: ['backgroundColor', 'color', 'padding'],
    },
    themeSpec: {},
    theme: {},
    style: {
      backgroundColor: ['white', 'linen', 'lavendar'],
      color: ['black', 'maroon', 'navy'],
      padding: ['16px', '32px', '64px'],
    },
  },
  {
    title: 'Counter example',
    notes: [
      'This is a counter example that sets up non-working themed styles.',
      'The "backgroundColor" style CSS property is not applied as it is not registered under the theme spec.',
      'The "color" CSS property is not applied as it is not resolvable under the theme.',
      'The "padding" CSS property is not responsive as it is not explicitly configured and whitelisted as a responsive CSS property.',
      'To fix this example, refer to the next example (see Example 10).',
    ],
    config: {
      responsiveBreakpoints: ['800px', '1200px'],
      responsiveCssProperties: ['margin'],
    },
    themeSpec: {
      colors: ['color'],
      spacings: ['padding'],
    },
    theme: {
      colors: {
        background: {
          primary: 'linen',
        },
        text: {
          primary: 'sienna',
        },
      },
      spacings: {
        s: '8px',
        m: '16px',
        l: '32px',
      },
    },
    style: {
      backgroundColor: 'background.primary',
      color: 'text.secondary',
      padding: ['s', 'm', 'l'],
    },
  },
  {
    title: 'Counter example (fixed)',
    notes: ['This example fixes the previous counter example (see Example 9)'],
    config: {
      responsiveBreakpoints: ['800px', '1200px'],
      responsiveCssProperties: ['margin', 'padding'],
    },
    themeSpec: {
      colors: ['backgroundColor', 'color'],
      spacings: ['padding'],
    },
    theme: {
      colors: {
        background: {
          primary: 'linen',
        },
        text: {
          primary: 'sienna',
          secondary: 'navy',
        },
      },
      spacings: {
        s: '8px',
        m: '16px',
        l: '32px',
      },
    },
    style: {
      backgroundColor: 'background.primary',
      color: 'text.secondary',
      padding: ['s', 'm', 'l'],
    },
  },
  {
    title: 'Kitchen sink example',
    notes: [
      'This kitchen sink example covers all concepts in prior examples (themed + responsive + css keyframes + css variables + modern CSS-in-JS).',
      'All concepts interoperate well with each other (e.g. even themed CSS keyframes can be responsive and resolve to CSS variables!).',
      'Now test your knowledge in a blank slate by visiting Example 1!',
    ],
    config: {
      enableCssVariables: true,
      responsiveBreakpoints: ['800px', '1200px'],
      responsiveCssProperties: [
        'animationName',
        'backgroundColor',
        'color',
        'padding',
      ],
    },
    themeSpec: {
      animations: ['animation'],
      keyframes: ['animationName'],
      colors: ['backgroundColor', 'color'],
      spacings: ['padding'],
    },
    theme: {
      animations: {
        linear: {
          infinite: '2s linear infinite',
        },
      },
      colors: {
        background: {
          primary: 'linen',
          emphasis: 'wheat',
        },
        text: {
          primary: 'dimgray',
          emphasis: 'maroon',
        },
      },
      keyframes: {
        opacity: {
          flicker: {
            '0%': {opacity: '0'},
            '50%': {opacity: '1'},
            '100%': {opacity: '0'},
          },
        },
      },
      spacings: {
        s: '8px',
        m: '16px',
        l: '32px',
      },
    },
    style: {
      backgroundColor: ['white', 'background.emphasis', 'background.primary'],
      color: ['black', 'text.emphasis', 'text.primary'],
      padding: ['s', 'm', 'l'],
      '& p': {
        animation: 'linear.infinite',
        animationName: ['none', 'opacity.flicker', 'opacity.flicker'],
      },
    },
  },
];
