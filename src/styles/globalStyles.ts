import './imports.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
    }

    body {
        background-color: ${p => p.theme.pageBackground};
        color: ${p => p.theme.pageForeground};
        font-family: "Lato", sans-serif;
    }
`
