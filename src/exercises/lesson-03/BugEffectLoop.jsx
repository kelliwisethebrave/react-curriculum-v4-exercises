//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// Without an array added (dependency array),
// the effect will continue to run with every
// render, so it will continue to run without
// stopping, because there is nothing to stop it,
// which creates an infinite loop.
// With the dependency array (second argument) added,
// this time as an empty array, the effect runs
// once, and then stops.
