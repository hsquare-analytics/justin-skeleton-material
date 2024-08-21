import { ThemeProvider } from '@mui/material/styles'
import { defaultTheme } from 'app/assets/theme/theme.ts'
import Container from '@mui/material/Container'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import Routes from 'app/routes/Routes.tsx'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Routes />
      </Container>
    </ThemeProvider>
  )
}

export default App
