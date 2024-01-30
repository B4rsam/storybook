import { FC, HTMLAttributes, ReactNode } from 'react'
import TableHead from './tableComponents/TableHead';
import TableBody from './tableComponents/TableBody';
import './table.module.sass'

interface ITable extends HTMLAttributes<HTMLTableElement> {
    children: ReactNode;
    headerContent: Array<string>;
    tableContent: Array<Array<string>>;
    withHead: boolean;
    columnCount: number;
}

const Table : FC<ITable>= ({children, className, headerContent, withHead, columnCount, tableContent}) => {
    return (
        <table className={className}>
            {withHead ? <TableHead headContent={headerContent} columnCount={columnCount}/> : ""}
            <TableBody tableContent={tableContent}/>
        </table>
    )
}

export default Table