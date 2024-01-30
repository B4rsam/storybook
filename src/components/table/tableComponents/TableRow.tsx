import { FC, HTMLAttributes, ReactNode } from 'react'
import TableCells from './TableCell'

interface IRow extends HTMLAttributes<HTMLTableElement> {
    data: Array<string>;
}

const TableRow : FC<IRow>= ({data}) => {

    const dataInsertion = () => {
        return (
            data.map((item) => {
                <TableCells content={item}/>
            }) 
        )
        
    }
    return (
        <tr>
            {data.map((item) => <TableCells content={item}/>)}
        </tr>
    )
}

export default TableRow