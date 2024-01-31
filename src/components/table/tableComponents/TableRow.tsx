import { FC, HTMLAttributes } from 'react'
import TableCells from './TableCell'
import s from '../table.module.sass'

interface IRow extends HTMLAttributes<HTMLTableElement> {
    data: Array<string>;
}

const TableRow : FC<IRow>= ({data}) => {
    return (
        <tr className={s.tableRow}>
            {data.map((item) => <TableCells key={item} content={item}/>)}
        </tr>
    )
}

export default TableRow