import { FC, HTMLAttributes, ReactNode } from 'react'
import TableCells from './TableCell';

interface IHead extends HTMLAttributes<HTMLTableElement> {
    headContent: Array<string>;
}

const TableHead : FC<IHead>= ({headContent, className}) => {

    return (
        <thead className={className}>
            {headContent.map((item) => <TableCells key={item} content={item}/>)}
        </thead>
    )
}

export default TableHead