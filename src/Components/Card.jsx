import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

function Card() {
  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const { data } = await axios.get(apiUrl);
        setBooks(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchBooks();
  }, []);

  const handleViewDetails = (book) => {
    navigate('/details', { state: { book } });
  };

  return (
    <div className="card-container">
      {books.map((book) => (
        <div key={book.id} className="card">
          {/* ... (other card content) */}
          <img
            src={
              book.volumeInfo.imageLinks?.thumbnail || "placeholder-image-url"
            }
            className="card-img-top"
            alt={book.volumeInfo.title}
          />
          <div className="card-body">
          <span>
            <button
              onClick={() => handleViewDetails(book)}
              className="btn btn-primary"
            >
              View Details
            </button>
          </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

