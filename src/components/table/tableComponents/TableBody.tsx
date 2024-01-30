import { FC, HTMLAttributes, ReactNode } from 'react'
import TableRow from './TableRow';

interface ITBody extends HTMLAttributes<HTMLTableElement> {
    tableContent: Array<Array<string>>;
    data: Array<string>;
}

const TableBody : FC<ITBody>= ({tableContent}) => {

    return (
        <tbody>
            {tableContent.map((item) => <TableRow data={item} />)}
        </tbody>
    )
}

export default TableBody