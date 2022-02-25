import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    span {
        font-weight: 600;
        margin-bottom: 5px;
        display: inline-block;
    }

    select {
        width: 100%;
        height: 2.5rem;
        border-radius: 5px;
        background-color: ${p => p.theme.pageBackground};
        border: 0;
        padding: 0 1rem;
        outline: 0;
        font-size: 0.9rem;

        option {
            color: ${p => p.theme.pageForeground};
            font-size: 0.9rem;
        }
    }
`
