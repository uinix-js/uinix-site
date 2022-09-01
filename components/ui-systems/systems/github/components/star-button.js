import {useState} from 'react';

import {Button} from './button.js';

export function StarButton({count: initialCount}) {
  const [isStarred, setIsStarred] = useState(false);
  const [count, setCount] = useState(initialCount);

  const icon = isStarred ? 'starFill' : 'star';
  const text = isStarred ? 'Unstar' : 'Star';

  return (
    <Button
      icon={icon}
      count={count}
      text={text}
      onClick={() => {
        setIsStarred(!isStarred);
        setCount(isStarred ? count - 1 : count + 1);
      }}
    />
  );
}
