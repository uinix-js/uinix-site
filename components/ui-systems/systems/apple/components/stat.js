import {Element, Layout, Text} from 'uinix-ui';

import touchId from '../assets/images/icon-touch.png';
import touchBarAndTouchId from '../assets/images/icon-touch-bar.png';
import {Footnote} from './footnote.js';

const images = {
  touchId,
  touchBarAndTouchId,
};

export function Stat({stat}) {
  const {description, footnote, isExact, value} = stat;
  const imageSrc = images[value]?.src;

  return (
    <Layout
      align="center"
      direction="column"
      h="height.badge"
      justify="center"
      spacing="x2"
    >
      <Text styleVariant="badgeInfo">{isExact ? '' : 'Up to'}</Text>
      {imageSrc ? (
        <Element as="img" h="icon.image" src={imageSrc} />
      ) : (
        <Text styleVariant="badge">{value}</Text>
      )}
      <Text styleVariant="badgeInfo">
        {description}
        {footnote && <Footnote footnote={footnote} />}
      </Text>
    </Layout>
  );
}
