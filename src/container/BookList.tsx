import React from 'react';
import BookListItem from "./BookListItem";

interface BookProps {
    title: string
}

const BookList: React.FC = () => {
    const books: BookProps[] = [
        {title: 'A first Book'},
        {title: 'Another awesome Book'},
        {title: 'Learn React - the full book'}
    ]

    return(
        <ul>
            {books.map((book, index) =>
                <BookListItem key={index} title={book.title} />
            )}
        </ul>
    );
}

export default BookList;
