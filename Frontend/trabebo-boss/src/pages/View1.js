import React, { useState } from 'react';

const View1 = () => {
  const [bookId, setBookId] = useState('');
  const [bookData, setBookData] = useState(null);
  const [customerData, setCustomerData] = useState(null);

  const handleInputChange = (event) => {
    setBookId(event.target.value);
  };

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/books/${bookId}`);
      const data = await response.json();

      setBookData(data.book);
      setCustomerData(data.customer);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchBookDetails();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <style>
        {`
          .title {
            text-align: center;
            margin-bottom: 20px;
          }

          .search-container {
            margin-bottom: 20px;
            text-align: center;
          }

          .search-input {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ccc;
            border-radius: 5px;
            margin-right: 10px;
          }

          .search-button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .details-container {
            margin-top: 20px;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 4px;
          }

          .details-title {
            margin-bottom: 10px;
          }
        `}
      </style>

      <h1 className="title">Book Details</h1>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter book ID"
            value={bookId}
            onChange={handleInputChange}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {bookData && (
        <div className="details-container">
          <h2 className="details-title">Book Details</h2>
          <p>ID: {bookData.id}</p>
          <p>Email: {bookData.email}</p>
          <p>Contact: {bookData.contact}</p>
          <p>Destination: {bookData.destination}</p>
          <p>Number: {bookData.num}</p>
          <p>Arrival: {bookData.arrival}</p>
          <p>Departure: {bookData.departure}</p>
          <p>Name: {bookData.name}</p>
        </div>
      )}
      {customerData && (
        <div className="details-container">
          <h2 className="details-title">Customer Details</h2>
          <p>ID: {customerData.id}</p>
          <p>Name: {customerData.customerName}</p>
          <p>Address: {customerData.customerAddress}</p>
          <p>Email: {customerData.customerEmail}</p>
          
          <p>Mobile: {customerData.customerMobile}</p>
        </div>
      )}
    </div>
  );
};

export default View1;