import { FC, HTMLAttributes, ReactNode } from 'react'
import TableHead from './tableComponents/TableHead';
import TableBody from './tableComponents/TableBody';
import s from './table.module.sass'

interface ITable extends HTMLAttributes<HTMLTableElement> {
    headerContent: Array<string>;
    tableContent: Array<Array<string>>;
    withHead: boolean;
}

const Table : FC<ITable>= ({className, headerContent, withHead, tableContent}) => {
    return (
        <table className={`${s.table} ${className}`}>
            {withHead ? <TableHead className={s.tableHead} headContent={headerContent}/> : ""}
            <TableBody className={s.tableBody} tableContent={tableContent}/>
        </table>
    )
}

export default Table