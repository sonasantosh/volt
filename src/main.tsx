import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes/index.tsx';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({

  typography: {
    fontFamily: '"Inter", sans-serif',
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
  },

  palette: {
    primary: {
      main: '#1B242C',
      light: '#f4f2fb',
      dark: '#0D13B2',
      contrastText: '#fff',
    },
  },

});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </StrictMode>,
)
