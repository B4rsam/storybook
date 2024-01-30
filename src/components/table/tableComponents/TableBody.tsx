import { FC, HTMLAttributes, ReactNode } from 'react'
import TableRow from './TableRow';

interface ITBody extends HTMLAttributes<HTMLTableElement> {
    tableContent: Array<Array<string>>;
    data: Array<string>;
}

const TableBody : FC<ITBody>= ({tableContent}) => {

    const rowInsertion = () => {
        tableContent.map((item) => {
            return (<TableRow data={item}/>)
        })
    }

    return (
        <tbody>
            {rowInsertion()}
        </tbody>
    )
}

export default TableBody