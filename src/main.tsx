import React from 'react'
import ReactDOM from 'react-dom'

import { ErrorBoundary } from './components/ErrorBoundary'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/globalStyles'
import { light } from './styles/theme/light'

import Home from './pages/Home'

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <ThemeProvider theme={light}>
                <GlobalStyles />
                <Home />
            </ThemeProvider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
)
