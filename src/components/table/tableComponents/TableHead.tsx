import { FC, HTMLAttributes, ReactNode } from 'react'
import TableCells from './TableCell';

interface IHead extends HTMLAttributes<HTMLTableElement> {
    headContent: Array<string>;
    columnCount: number;
}

const TableHead : FC<IHead>= ({headContent, columnCount}) => {
    const handleColumns = () => {
        headContent.map((item) => {
            return ( <TableCells content={item}/>)
        })
    }
    return (
        <th>
            {handleColumns()}
        </th>
    )
}

export default TableHead