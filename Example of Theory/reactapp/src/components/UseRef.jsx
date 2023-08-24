import React, { useRef, useEffect } from 'react';

const UseRef = () => {
  // Create a ref to hold the DOM element reference
  const buttonRef = useRef(null);

  // Function to focus the button element when the component mounts
  const focusButton = () => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  // Call the focusButton function when the component mounts
  useEffect(() => {
    focusButton();
  }, []);

  return (
    <div>
      <button ref={buttonRef}>Click me</button>
    </div>
  );
};

export default UseRef;
