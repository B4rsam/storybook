import { FC, HTMLAttributes, ReactNode } from 'react'
import TableCells from './TableCell'

interface IRow extends HTMLAttributes<HTMLTableElement> {
    data: Array<string>;
}

const TableRow : FC<IRow>= ({data}) => {

    const dataInsertion = () => {
        data.map((item) => {
            return (<TableCells content={item}/>)
        })
    }
    return (
        <tr>
            {dataInsertion()}
        </tr>
    )
}

export default TableRow