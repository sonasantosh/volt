import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes/index.tsx';
// import '@fontsource/inter/400';
// import '@fontsource/inter/500';
// import '@fontsource/inter/600';
// import '@fontsource/inter/700';
// import { createTheme, ThemeProvider, Typography } from '@mui/material';

// const theme = createTheme({

// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
