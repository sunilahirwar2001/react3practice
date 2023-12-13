// import React, { useState } from 'react';

// const FindMissingNumber = () => {
//   const [array, setArray] = useState([1,2,4,5]);
//   const [n, setN] = useState(5);
//   const [missingNumber, setMissingNumber] = useState(null);

//   const findMissingNumber = () => {
//     // Calculate the expected sum of numbers from 1 to N
//     const expectedSum = (n * (n + 1)) / 2;

//     // Calculate the sum of array elements
//     const actualSum = array.reduce((acc, num) => acc + num, 0);

//     // The missing number is the difference between the expected sum and the actual sum
//     const result = expectedSum - actualSum;
//     setMissingNumber(result);
//   };

//   return (
//     <div>
//       <label>
//         Enter array (comma-separated):
//         <input
//           type="text"
//           value={array.join(',')}
//           onChange={(e) => setArray(e.target.value.split(',').map(Number))}
//         />
//       </label>
//       <br />
//       <label>
//         Enter N:
//         <input
//           type="number"
//           value={n}
//           onChange={(e) => setN(parseInt(e.target.value, 10))}
//         />
//       </label>
//       <br />
//       <button onClick={findMissingNumber}>Find Missing Number</button>
//       <p>Missing number is: {missingNumber}</p>
//     </div>
//   );
// };

// export default FindMissingNumber;


import React, { useState } from 'react';

const FindMissingNumber = () => {
  const [array, setArray] = useState([]);
  const [n, setN] = useState('');
  const [missingNumber, setMissingNumber] = useState(null);

  const findMissingNumber = () => {
    // Validate input
    if (!n || !array || array.length === 0) {
      alert('Please enter valid values for array and N.');
      return;
    }

    // Convert N to a number
    const N = parseInt(n, 10);

    // Calculate the expected sum of numbers from 1 to N
    const expectedSum = (N * (N + 1)) / 2;

    // Calculate the sum of array elements
    const actualSum = array.reduce((acc, num) => acc + num, 0);

    // The missing number is the difference between the expected sum and the actual sum
    const result = expectedSum - actualSum;
    setMissingNumber(result);
  };

  return (
    <div>
      <label>
        Enter array (comma-separated):
        <input
          type="text"
          value={array.join(',')}
          onChange={(e) => setArray(e.target.value.split(',').map(Number))}
        />
      </label>
      <br />
      <label>
        Enter N:
        <input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
      </label>
      <br />
      <button onClick={findMissingNumber}>Find Missing Number</button>
      <p>Missing number is: {missingNumber}</p>
    </div>
  );
};

export default FindMissingNumber;
