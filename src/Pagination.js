import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

function PaginationItem() {
   const [store, setStore] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 10;
     const [data, setData] = useState([]);

  async function fetchApi() {

     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let result = await response.json();
          setStore(result);

        let startIndex = (currentPage - 1) * itemsPerPage; // 0*10 1*10 2*10
    let endIndex = startIndex + itemsPerPage;             
    let temp = result.slice(startIndex, endIndex);      // 10  
    setData(temp);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      let startIndex = (currentPage - 2) * itemsPerPage;
      let endIndex = startIndex + itemsPerPage;
      let temp = store.slice(startIndex, endIndex);
      setData(temp);
    }
  };

  const handleNext = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
      let startIndex = currentPage * itemsPerPage;
      let endIndex = startIndex + itemsPerPage;
      let temp = store.slice(startIndex, endIndex);
      setData(temp);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [currentPage]);

  return (
    <div className="App">
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaginationItem;
