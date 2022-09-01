import {Element, Layout} from 'uinix-ui';

export function MacbookImage({src}) {
  return (
    <Layout align="flex-end" h="height.macbookContainer">
      <Element as="img" src={src} styles={styles.fit} />
    </Layout>
  );
}

const styles = {
  fit: {
    height: 'auto',
    objectFit: 'contain',
    width: '100%',
  },
};
