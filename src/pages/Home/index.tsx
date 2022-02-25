import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { Column, useTable } from "react-table";

import { formatDataTypes, positionHeader } from "../../utils/tableUtils";
import { SkeletonContainer } from './SkeletonHome'
import { UniversitiesProps } from "../../types";
import { useUniversities } from "../../hooks/useUniversities";
import { withBoundary } from "../../hoc/withBoundary"
import { Filters } from "./Filters";

import Table from "../../components/Table";
import * as S from './styles'
import { usePageTitle } from "../../hooks/usePageTitle";

const initialState = {
    Region: '',
    State: '',
    RegionType: '',
    Type: '',
}

const Home = () => {
    usePageTitle('Home')
    const [filter, setFilter] = useState(initialState)
    const { fetchUniversities, universities, error, loading } = useUniversities()
    const [filterUniversities, setFilterUniversities] = useState<UniversitiesProps[]>()
    const [newArray, setNewArray] = useState<UniversitiesProps[]>([])

    useEffect(() => {
        fetchUniversities()
        setNewArray([...universities || []])
    }, [fetchUniversities, universities?.length])

    const compare = (a: string, b: string) => {
        var nameA = a.toUpperCase();
        var nameB = b.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    }

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setFilter((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })

        if (universities?.length) {
            let filterBy: UniversitiesProps[] = newArray?.length ? [...newArray] : []

            if (name === 'State') {
                filterBy = newArray.filter(data => data.State === value)
            }
            if (name === 'RegionType') {
                filterBy = newArray.filter(data => data.RegionType === value)
            }
            if (name === 'Region') {
                filterBy = newArray.filter(data => data.Region === value)
            }
            if (name === 'Type') {
                filterBy = newArray.filter(data => data.Type === value)
            }

            setNewArray(filterBy)
            setFilterUniversities(filterBy.sort((a, b) => compare(a.Name, b.Name)))
        }
    }

    const handleClear = () => {
        setFilter(initialState)
        setFilterUniversities([])
        if (universities?.length)
            setNewArray([...universities])
    }

    const columns = useMemo<Column<UniversitiesProps>[]>(() => [
        {
            Header: positionHeader('Nome', 'left'),
            accessor: 'Name',
        },
        {
            Header: positionHeader('Inicial', 'left'),
            accessor: 'Initial',
        },
        {
            Header: positionHeader('Região', 'left'),
            accessor: 'Region',
        },
        {
            Header: positionHeader('Estado', 'left'),
            accessor: 'State',
        },
        {
            Header: positionHeader('Tipo da Região', 'left'),
            accessor: 'RegionType',
        },
        {
            Header: positionHeader('Tipo', 'left'),
            accessor: 'Type',
            Cell: (p) => formatDataTypes(p.value)
        },
    ], [])

    console.log(newArray)

    const instance = useTable<UniversitiesProps>(
        {
            data: filterUniversities?.length
                ? filterUniversities
                : newArray?.sort((a, b) => compare(a.Name, b.Name)) || [],
            columns,
        },
    )

    if (error) throw error

    return (
        <S.Wrapper>
            <S.Container>
                <Filters
                    onChange={onChange}
                    filter={filter}
                    handleClear={handleClear}
                    disabled={loading}
                />

                <S.Content>
                    {loading
                        ? <SkeletonContainer />
                        : <Table instance={instance} />
                    }
                </S.Content>
            </S.Container>
        </S.Wrapper>
    )
}

export default withBoundary(Home, 'Home')
