import { FC, HTMLAttributes, useId } from 'react'
import TableCells from './TableCell';

interface IHead extends HTMLAttributes<HTMLTableElement> {
    headContent: Array<string>;
}

const TableHead : FC<IHead>= ({headContent, className}) => {

    return (
        <thead className={className}>
            <tr>
                {headContent.map((item) => <TableCells key={useId()} content={item}/>)}
            </tr>
        </thead>
    )
}

export default TableHead