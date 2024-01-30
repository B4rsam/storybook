import { FC, HTMLAttributes, ReactNode } from 'react'

interface ICell extends HTMLAttributes<HTMLTableElement> {
    content: string;
}

const TableCells : FC<ICell> = ({content}) => {
    return (
        <td>
            {content}
        </td>
    )
}

export default TableCells