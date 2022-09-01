import {ThemePlayground} from '../../components/theme-playground/theme-playground.js';

export const getStaticProps = () => ({
  props: {
    title: 'Theme Playground',
    description:
      'Playground to interactively learn and explore uinix-theme APIs.',
  },
});

export default function Page() {
  return <ThemePlayground />;
}
