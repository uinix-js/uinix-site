import {remarkCodeHike} from '@code-hike/mdx';
import nextMdx from '@next/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

import shikiRosePineDawnTheme from './vendor/shiki-rose-pine-dawn-theme.js';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    remarkPlugins: [
      remarkGfm,
      [
        remarkCodeHike,
        {
          lineNumbers: true,
          showCopyButton: true,
          theme: shikiRosePineDawnTheme,
        },
      ],
    ],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX({
  pageExtensions: ['js', 'md', 'mdx'],
});
