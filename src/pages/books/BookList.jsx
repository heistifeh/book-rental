import React from 'react'
import { getAllBooks } from '../../data/books'
import BookCard from './BookCard';

const BookList = () => {
    const books = getAllBooks();
  return (
    <div className='content'>
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3'>
            {
                books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))
            }
        </div>
    </div>
  )
}

export default BookList