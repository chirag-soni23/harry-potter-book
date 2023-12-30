import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context
const BookContext = createContext();

// Create a provider component
export const BookProvider = ({ children }) => {
  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const { data } = await axios.get(apiUrl);
        console.log(data);
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchBooks();
  }, []);

  // Provide the context value
  return <BookContext.Provider value={books}>{children}</BookContext.Provider>;
};

// Create a custom hook for using the context
export const useBookContext = () => {
  return useContext(BookContext);
};
