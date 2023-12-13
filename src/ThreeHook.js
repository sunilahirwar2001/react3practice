// User
// useEffect,useCallback,useMemo tino me difference batao or detail me batao kya difference hai tino me
// ChatGPT
// Sure, I'd be happy to explain the differences between useEffect, useCallback, and useMemo in the context of React hooks.

// useEffect:

// useEffect is used for handling side effects in functional components.
// It is commonly used for data fetching, subscriptions, manual DOM manipulations, and other side effects.
// It takes two arguments: a function that contains the code to run, and an optional array of dependencies.
// The function passed to useEffect will be executed after the component has rendered.
// The dependencies array is used to specify which values or props the effect depends on. If any of the dependencies change, the effect will run again.
// If the dependencies array is empty, the effect runs only once after the initial render.
// Example:

// jsx
// Copy code
// useEffect(() => {
//   // code to run after each render
//   return () => {
//     // cleanup code (optional)
//   };
// }, [dependencies]);
// useCallback:

// useCallback is used to memoize functions, preventing unnecessary re-creation of function instances.
// It is useful when passing callbacks to child components to avoid unnecessary re-renders of those components.
// useCallback takes a function and an array of dependencies. It returns a memoized version of the function.
// The memoized function will only change if one of the dependencies has changed.
// Example:

// jsx
// Copy code
// const memoizedCallback = useCallback(() => {
//   // function logic
// }, [dependencies]);
// useMemo:

// useMemo is used to memoize values, preventing unnecessary calculations or re-renders.
// It takes a function and an array of dependencies, and it returns the memoized value.
// The function provided to useMemo will only be re-executed if one of the dependencies has changed.
// It is commonly used to optimize performance by avoiding unnecessary computations.
// Example:

// jsx
// Copy code
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// In summary:

// Use useEffect for handling side effects in your components.
// Use useCallback to memoize functions, particularly when passing them as props to child components.
// Use useMemo to memoize values, especially when the computation of a value is expensive and you want to avoid unnecessary recalculations.


// import React, { useState, useEffect } from 'react';
// const ExampleComponent = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     // This code runs after each render
//     console.log(`Count: ${count}`);

//     // Cleanup function (optional)
//     return () => {
//       console.log('Cleanup');
//     };
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>
//     </div>
//   );
// };
// export default ExampleComponent;









// import React, { useState, useCallback } from 'react';

// const ChildComponent = ({ onClick }) => {
//   return <button onClick={onClick}>Click me!</button>;
// };

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     // This function is memoized and won't change on re-renders
//     console.log('Button clicked');
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// };

// export default ParentComponent;





// import React, { useState, useMemo } from 'react';

// const ExpensiveComponent = ({ a, b }) => {
//   // Some expensive computation
//   const expensiveValue = useMemo(() => {
//     console.log('Computing expensive value');
//     return a + b;
//   }, [a, b]);

//   return <p>Expensive Value: {expensiveValue}</p>;
// };

// const ExampleComponent = () => {
//   const [valueA, setValueA] = useState(1);
//   const [valueB, setValueB] = useState(2);

//   return (
//     <div>
//       <ExpensiveComponent a={valueA} b={valueB} />
//       <button onClick={() => setValueA(valueA + 1)}>Increment A</button>
//       <button onClick={() => setValueB(valueB + 1)}>Increment B</button>
//     </div>
//   );
// };

// export default ExampleComponent;









import React, { useState, useEffect, useCallback, useMemo } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useEffect for side effects (e.g., logging)
      useEffect(() => {
        console.log(`Count: ${count}`);
      return () => {
       console.log('Cleanup');
    };
  }, [count]);

  // useCallback to memoize a function
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]);

  // useMemo to memoize a computed value
  const reversedText = useMemo(() => {
    console.log('Computing reversed text');
    return text.split('').reverse().join('');
  }, [text]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Reversed Text: {reversedText}</p>
      <button onClick={handleClick}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
};

export default ExampleComponent;


















// import React, { useState, useEffect, useCallback, useMemo } from 'react';

// const ReverseTextComponent = ({ text }) => {
//   // useEffect ka upayog karte hue, har baar render hone par console mein log karenge
//   useEffect(() => {
//     console.log('Component rendered');
//   });

//   // useMemo ka upayog karte hue, har baar render hone par computation karenge
//   const reversedText = useMemo(() => {
//     console.log('Computing reversed text');
//     return text.split('').reverse().join('');
//   }, [text]);

//   return <p>Reversed Text: {reversedText}</p>;
// };

// const ExampleComponent = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   // useCallback ka upayog karte hue, har baar render hone par function change karenge
//   const handleClick = useCallback(() => {
//     console.log('Button clicked');
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment Count</button>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Kuch likhein..."
//       />

//       {/* ReverseTextComponent ko har baar render hone par render karenge */}
//       <ReverseTextComponent text={text} />
//     </div>
//   );
// };

// export default ExampleComponent;
