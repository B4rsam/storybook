import { FC, HTMLAttributes } from 'react'
import TableHead from './tableComponents/TableHead';
import TableBody from './tableComponents/TableBody';
import s from './table.module.sass'

interface ITable extends HTMLAttributes<HTMLTableElement> {
    headerContent: Array<any>;
    tableContent: Array<Array<any>>;
    withHead: boolean;
}

const Table : FC<ITable>= ({className, headerContent, withHead, tableContent}) => {
    return (
        <table className={`${s.table} ${className}`}>
            {withHead ? <TableHead className={s.tableHead} headContent={headerContent}/> : null}
            <TableBody className={s.tableBody} tableContent={tableContent}/>
        </table>
    )
}

export default Table