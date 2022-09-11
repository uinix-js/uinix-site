import {debounce} from 'lodash';
import {useEffect, useMemo, useRef, useState} from 'react';

import {navigateToHash} from '../utils/navigate-to-hash.js';

const createSelector = (headings) =>
  headings.map((heading) => `${heading}[id]`).join(',');

const defaultOptions = {
  debounceMs: 300,
  headings: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  offsetY: 0,
};

// TODO: abstract this fun util into a DOM-based implementation in uinix-toc
export const useToc = (initialOptions = {}) => {
  const trackedClientY = useRef(null); // Track the mouseEvent.clientY

  const [toc, setToc] = useState([]); // Track the toc

  const [activeHeadingId, setActiveHeadingId] = useState(null);

  const options = useMemo(
    () => ({
      ...defaultOptions,
      ...initialOptions,
    }),
    [initialOptions],
  );

  // Create toc on specific events (initialize, resize)
  useEffect(() => {
    const {debounceMs, headings} = options;
    const selector = options.selector || createSelector(headings);
    const headingNodes = document.querySelectorAll(selector);

    const createToc = debounce(() => {
      const trackedHeadingSections = [];
      let trackedHeadingLevel = 0;
      let headingSectionNumber = 0;
      const newToc = Array.from(headingNodes).map((headingNode) => {
        const headingLevel = Number(headingNode.nodeName[1]);

        if (headingLevel > trackedHeadingLevel) {
          headingSectionNumber = 1;
          trackedHeadingSections.push(headingSectionNumber);
        } else if (headingLevel === trackedHeadingLevel) {
          headingSectionNumber++;
          trackedHeadingSections.push(trackedHeadingSections.pop() + 1);
        } else if (headingLevel < trackedHeadingLevel) {
          trackedHeadingSections.pop();
          trackedHeadingSections.push(trackedHeadingSections.pop() + 1);
        }

        trackedHeadingLevel = headingLevel;

        const headingSections = [...trackedHeadingSections]; // Snapshot (clone) toc sections for current heading
        const y =
          headingNode.getBoundingClientRect().y +
          document.documentElement.scrollTop; // Y position of the heading relative to the absolute document (i.e. accounting for scroll)

        return {
          id: headingNode.id,
          level: headingLevel,
          sections: headingSections,
          text: headingNode.textContent,
          y,
        };
      });

      setToc(newToc);
    }, debounceMs);

    createToc();

    window.addEventListener('resize', createToc);

    return () => {
      setActiveHeadingId(null);
      setToc([]);

      window.removeEventListener('resize', createToc);
    };
  }, [options]);

  // Update active heading ID on specific events (mousemove, scroll, selectionchange)
  useEffect(() => {
    const {debounceMs, includeSelector, offsetY} = options;
    const includeNodes = document.querySelectorAll(includeSelector);

    const updateActiveHeadingId = debounce((dy) => {
      const {scrollTop} = document.documentElement;
      const nextHeadingIndex = toc.findIndex(({y}) => y >= scrollTop + dy);
      const updatedActiveHeadingIndex =
        nextHeadingIndex === -1 ? toc.length - 1 : nextHeadingIndex - 1;
      const updatedActiveHeadingId = toc[updatedActiveHeadingIndex]?.id || null;
      setActiveHeadingId(updatedActiveHeadingId);
    }, debounceMs);

    const handleMousemove = (mouseMoveEvent) => {
      const {clientY, target} = mouseMoveEvent;
      trackedClientY.current = clientY;

      const shouldUpdate = Array.from(includeNodes).some((node) =>
        node.contains(target),
      );

      if (shouldUpdate) {
        updateActiveHeadingId(clientY);
      }
    };

    const handleScroll = () => updateActiveHeadingId(offsetY);

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const selectionRange = selection.getRangeAt(0).cloneRange();
        const selectionBox = selectionRange.getClientRects()[0];
        if (selectionBox) {
          updateActiveHeadingId(selectionBox.y);
        }
      }
    };

    document.addEventListener('mousemove', handleMousemove);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('mousemove', handleMousemove);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [options, toc]);

  const permalink = (id) => {
    setActiveHeadingId(id);
    navigateToHash(id);
  };

  return {
    activeHeadingId,
    permalink,
    toc,
  };
};
