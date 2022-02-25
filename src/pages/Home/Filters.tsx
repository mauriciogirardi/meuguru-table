import { ChangeEvent } from 'react';
import { AiOutlineClear } from 'react-icons/ai'

import { regionsOptions, statesOptions, typeOptions, typeRegionOptions } from '../../utils/selectOptions';
import { Select } from '../../components/Select'

import * as S from './styles'

interface FilterValue {
    Region: string
    State: string
    RegionType: string
    Type: string
}

interface FiltersProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => any
    filter: FilterValue
    handleClear: () => any
    disabled?: boolean
}

interface SelectsProps {
    id: number
    label: string
    options: { value: string, label: string }[]
    name: 'State' | 'Region' | 'Type' | 'RegionType'
}

const arraySelects: SelectsProps[] = [
    { id: 1, label: 'Estado', name: 'State', options: statesOptions },
    { id: 2, label: 'Região', name: 'Region', options: regionsOptions },
    { id: 3, label: 'Tipo', name: 'Type', options: typeOptions },
    { id: 4, label: 'Tipo de Região', name: 'RegionType', options: typeRegionOptions },
]

export const Filters = ({ onChange, filter, handleClear, disabled }: FiltersProps) => {
    return (
        <S.FilterContainer>
            {arraySelects.map(data => (
                <Select
                    key={data.id}
                    label={data.label}
                    options={data.options}
                    onChange={(e) => onChange(e)}
                    value={[filter[data.name]]}
                    name={data.name}
                    disabled={disabled || !!filter[data.name]}
                />
            ))}

            <S.ButtonClear
                type="button"
                onClick={handleClear}
                disabled={disabled}
            >
                <AiOutlineClear size={25} />
            </S.ButtonClear>
        </S.FilterContainer>
    )
}
