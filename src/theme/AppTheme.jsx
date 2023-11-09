import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

export const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0087db',
      },
      grey: {
        main: '#f0f8ff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
