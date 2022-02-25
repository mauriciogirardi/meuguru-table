import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const Container = styled.div`
    background: ${p => p.theme.primaryForeground};
    padding: 4rem;
    width: 1200px;
    border-radius: ${p => p.theme.borderRadius};
`

export const Content = styled.div`
    height: 600px;
    overflow-y: auto;
    background: ${p => p.theme.primaryForeground};

    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
    }
    `

export const FilterContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const ButtonClear = styled.button`
    background-color: ${p => p.theme.primaryBackground};
    border: 0;
    border-radius: 5px;
    color: ${p => p.theme.primaryForeground};
    width: 25%;
    height: 2.5rem;
    font-size: 1rem;
    outline: 0;
    transition: all .25s ease-in-out;
    cursor: pointer;
    margin-bottom: -23px;

    :hover {
        background-color: ${p => transparentize(0.2, p.theme.primaryBackground)};
    }

    :disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`
export const SkeletonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px
`
