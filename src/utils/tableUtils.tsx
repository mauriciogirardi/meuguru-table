import styled from "styled-components"

export const positionHeader = (name: string, position: 'left' | 'right') =>
    <p style={{ textAlign: position, whiteSpace: 'nowrap' }}>{name}</p>

export const formatDataTypes = (value: string) =>
    <DataType value={value === 'Privada' ? true : false}>{value}</DataType>

const DataType = styled.p<{
    value: boolean
}>`
    color: ${p => p.value ? '#d63e3e' : '#48d63e'};
`
