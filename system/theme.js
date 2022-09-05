import {createTheme} from 'uinix-ui';

const shared = {
  colors: {
    primary: 'sienna',
    secondary: 'dimgray',
    light: 'darkgray',
    wash: 'linen',
  },
  sizes: {
    navLinksHeight: 64,
  },
};

const borderWidths = {
  s: 1,
  m: 2,
  l: 4,
};

const borders = {
  border: `${borderWidths.s}px solid ${shared.colors.light}`,
};

const colors = {
  background: {
    primary: 'white',
    wash: shared.colors.wash,
  },
  brand: shared.colors,
  text: {
    body: 'black',
    link: shared.colors.primary,
  },
};

const fontFamilies = {
  body: 'system-ui, sans-serif',
  code: 'monospace',
};

const fontSizes = {
  s: '0.75rem',
  m: '1rem',
  l: '2rem',
};

const opacities = {
  invisible: 0,
  disabled: 0.3,
  interactive: 0.7,
  visible: 1,
};

const shadows = {
  card: '0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025)',
};

const sizes = {
  icon: {
    s: 16,
    m: 24,
  },
  container: {
    width: 928,
  },
  navLinks: {
    height: shared.sizes.navLinksHeight,
  },
};

const spacings = {
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 64,
  offsets: {
    navLinks: {
      height: shared.sizes.navLinksHeight,
    },
  },
};

const transitions = {
  fade: 'opacity 0.2s ease-in-out',
};

const zIndices = {
  forward: 1,
};

export const theme = createTheme({
  borders,
  borderWidths,
  colors,
  fontFamilies,
  fontSizes,
  opacities,
  shadows,
  sizes,
  spacings,
  transitions,
  zIndices,
});
