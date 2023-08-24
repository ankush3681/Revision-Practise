

// using JSX and React.createElement in same component 



import React, { useState } from 'react';

function Counter2() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const headingElement = React.createElement('h1', {
    className: 'heading'
  }, "This is counter");

//   const counterElement = React.createElement('div', null,
//     headingElement,
//     React.createElement('button', { onClick: incrementCount }, "Increment"),
//     React.createElement('h3', null, `Counter value: ${count}`)
//   );

  return (
    <>
    {headingElement}
    <h3>{count}</h3>
    <button onClick={incrementCount}>Increment</button>
    </>
  );
}

export default Counter2;
