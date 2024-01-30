import { FC, HTMLAttributes, ReactNode } from 'react'
import TableCells from './TableCell';

interface IHead extends HTMLAttributes<HTMLTableElement> {
    headContent: Array<string>;
}

const TableHead : FC<IHead>= ({headContent}) => {
    const handleColumns = () => {
        headContent.map((item) => {
            return ( <TableCells content={item}/>)
        })
    }
    return (
        <thead>
            {headContent.map((item) => <TableCells content={item}/>)}
        </thead>
    )
}

export default TableHead