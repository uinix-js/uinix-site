import {useState} from 'react';

import {Button} from './button.js';

export function ForkButton({count: initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <Button
      icon="forked"
      count={count}
      text="Fork"
      onClick={() => {
        setCount(count + 1);
      }}
    />
  );
}
