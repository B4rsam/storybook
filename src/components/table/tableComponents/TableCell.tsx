import { FC, HTMLAttributes } from 'react'
import s from '../table.module.sass'

interface ICell extends HTMLAttributes<HTMLTableElement> {
    content: string;
}

const TableCells : FC<ICell> = ({content}) => {
    return (
        <td className={s.tableCell}>
            {content}
        </td>
    )
}

export default TableCells