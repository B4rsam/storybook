import { FC, HTMLAttributes } from 'react'
import TableRow from './TableRow';
import s from '../table.module.sass'

interface ITBody extends HTMLAttributes<HTMLTableElement> {
    tableContent: Array<Array<string>>;
}

const TableBody : FC<ITBody>= ({tableContent, className}) => {

    return (
        <tbody className={`${className} `}>
            {tableContent.map((item, index) => <TableRow key={index} data={item} />)}
        </tbody>
    )
}

export default TableBody