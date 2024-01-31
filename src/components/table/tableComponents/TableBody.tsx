import { FC, HTMLAttributes, ReactNode } from 'react'
import TableRow from './TableRow';

interface ITBody extends HTMLAttributes<HTMLTableElement> {
    tableContent: Array<Array<string>>;
}

const TableBody : FC<ITBody>= ({tableContent, className}) => {

    return (
        <tbody className={className}>
            {tableContent.map((item, index) => <TableRow key={index} data={item} />)}
        </tbody>
    )
}

export default TableBody