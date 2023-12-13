import React from 'react';

const Product = ({ data }) => {
  return (
    <div className="product">
      {data.map((item) => (
        <div key={item.id}>
          {/* Display your product information here */}
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
