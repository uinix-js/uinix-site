import {ThemePlayground} from '../../components/theme-playground/theme-playground.js';

export const getStaticProps = () => ({
  props: {
    isFullPage: true,
  },
});

export default function Page() {
  return <ThemePlayground />;
}
