import { transparentize } from 'polished'
import { TableInstance } from 'react-table'

import { NoData } from '../NoData'

import * as S from './styles'

interface TableProps<T extends object> {
    instance: TableInstance<T>
}

export default function Table<T extends Object>({
    instance,
}: TableProps<T>) {
    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows,
    } = instance

    return (
        <>
            <S.TableContainer cellPadding={0} cellSpacing={0} {...getTableProps}>
                <S.THead>
                    {headerGroups.map(headerGroup => (
                        <S.TrHeading {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <S.Th  {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </S.Th>
                            ))}
                        </S.TrHeading>
                    ))}
                </S.THead>

                <S.TBody {...getTableBodyProps}>
                    {rows.map(row => {
                        prepareRow(row)

                        return (
                            <S.TrBody {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <S.Td key={cell.column.id} {...cell.getCellProps}>
                                        {cell.render('Cell')}
                                    </S.Td>
                                ))}
                            </S.TrBody>
                        )
                    })}
                </S.TBody>
            </S.TableContainer>

            {!rows.length && <NoData height={300} bg={transparentize(0.95, "#274060")} />}
        </>
    )
}
