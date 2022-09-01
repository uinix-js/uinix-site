export const getStaticProps = () => ({
  props: {
    title: '404',
    description: 'This page could not be found.',
  },
});

export default function Page() {
  return <div />;
}
