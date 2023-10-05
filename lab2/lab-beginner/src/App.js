import React from "react";

function MyComponent() {
  const handleClick = () => alert("Hello, Professor Mike!");
  return (
    <div>
      <h1>Hello, React!</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default MyComponent;
