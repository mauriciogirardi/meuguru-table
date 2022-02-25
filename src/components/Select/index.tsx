import { SelectHTMLAttributes } from 'react'
import * as S from './styles'

interface Option {
    value: string
    label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]
    label?: string
}

export const Select = ({ options = [], label, ...rest }: SelectProps) => {
    return (
        <S.Container>
            {label && <span>{label}:</span>}

            <select placeholder="Selecione um valor" {...rest}>
                <option value="" data-default disabled></option>
                {options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </S.Container>
    )
}
