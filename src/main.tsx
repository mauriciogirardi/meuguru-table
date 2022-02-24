import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyles } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/theme/light'

import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={light}>
            <GlobalStyles />
        </ThemeProvider>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
