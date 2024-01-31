import { FC, HTMLAttributes, useId } from 'react'
import TableRow from './TableRow';

interface ITBody extends HTMLAttributes<HTMLTableElement> {
    tableContent: Array<Array<string>>;
}

const TableBody : FC<ITBody>= ({tableContent, className}) => {

    return (
        <tbody className={`${className} `}>
            {tableContent.map((item) => <TableRow key={useId()} data={item} />)}
        </tbody>
    )
}

export default TableBody