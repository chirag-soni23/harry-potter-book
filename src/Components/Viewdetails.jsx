import React from "react";
import { useLocation } from "react-router-dom";

function Viewdetails() {
  const location = useLocation();
  const { book } = location.state || {};

  return (
    <div className="views">
      {book ? (
        <div className="viewCard">
          <div>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
          </div>
          <div className="content">
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors}</p>
            <span className="p">
              <p>
                {book.volumeInfo.description || "No description available 😒😒"}
              </p>
            </span>
            <div className="rate">
              <h6>
                Avg rating :{" "}
                {book.volumeInfo.averageRating || "No Rating available"}
              </h6>
              <span></span>
              <h6>
                Rating Count :{" "}
                {book.volumeInfo.ratingsCount || "No Counts available"}
              </h6>
              <span></span>
              <h6>
                Publisher :{" "}
                {book.volumeInfo.publisher || "No Publisher available"}
              </h6>
              <span></span>
              <h6>
                Language : {book.volumeInfo.language || "No Language availble"}
              </h6>
            </div>
          </div>
        </div>
      ) : (
        <p>No book details available.</p>
      )}
    </div>
  );
}

export default Viewdetails;
