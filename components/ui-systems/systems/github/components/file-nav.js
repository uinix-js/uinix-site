import {noop} from 'uinix-fp';
import {Layout} from 'uinix-ui';

import {Button} from './button.js';
import {IconText} from './icon-text.js';

export function FileNav() {
  return (
    <Layout
      wrap
      align="center"
      justify="space-between"
      spacing="l"
      wrapSpacing="m"
    >
      <Layout align="center" spacing="m">
        <Button icon="gitBranch" text="main" onExpand={noop} />
        <IconText icon="gitBranch" text="1 branch" textVariant="link" />
        <IconText icon="tag" text="0 tags" textVariant="link" />
      </Layout>
      <Layout align="center" spacing="m">
        <Button text="Go to file" />
        <Button text="Add file" onExpand={noop} />
        <Button
          icon="download"
          styleVariant="primary"
          text="Code"
          onExpand={noop}
        />
      </Layout>
    </Layout>
  );
}
