import { Book } from '@/models/book.model'
import React from 'react'
import BookBestItem from '../books/BookBestItem';
import styled from 'styled-components';

interface Props {
    books: Book[];
}

const MainBest = ({ books }: Props) => {
    return (
        <MainBestStyle>
            {books.map((item, index) => (
                <BookBestItem key={item.id} book={item} itemIndex={index} />
            ))}
        </MainBestStyle>
    )
};

const MainBestStyle = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 13px;

    @media screen and (${({ theme }) => theme.mediaQuery.mobile}) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export default MainBest