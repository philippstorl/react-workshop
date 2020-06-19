import React from 'react';

interface BookProps {
    title: string
}

const BookListItem: React.FC<BookProps> = ({title}) => {
    return(<li>{title}</li>);
}

export default BookListItem;
