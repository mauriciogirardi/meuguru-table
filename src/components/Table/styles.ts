import { transparentize } from "polished";
import styled, { keyframes } from "styled-components";

const pop = keyframes`
  from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`

export const TableContainer = styled.table`
    background-color: ${p => p.theme.primaryForeground};
    color: ${p => p.theme.pageForeground};
    width: 100%;
    animation: .25s ${pop} ease;
`

export const THead = styled.thead`
    background-color: ${transparentize(0.85, '#274060')};
`
export const TrHeading = styled.tr``

export const Th = styled.th`
    height: 2rem;
    font-size: 14px;
    padding: 0 8px;
`
export const TBody = styled.tbody``

export const TrBody = styled.tr``

export const Td = styled.td`
    height: 2.5rem;
    font-size: 12px;
    font-weight: 500;
    padding: 0 8px;
`
