export const humanize = (text) => text.split('-').map(titleCase).join(' ');

const titleCase = (text) => {
  const exclude = [
    'a',
    'an',
    'and',
    'as',
    'as',
    'at',
    'but',
    'by',
    'for',
    'for',
    'if',
    'in',
    'nor',
    'of',
    'off',
    'on',
    'or',
    'per',
    'so',
    'the',
    'to',
    'up',
    'via',
    'with',
    'yet',
  ];

  if (exclude.includes(text)) {
    return text;
  }

  return text[0].toUpperCase() + text.slice(1);
};
