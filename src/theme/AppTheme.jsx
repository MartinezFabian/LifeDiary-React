import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';

export const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#262254',
      },
      secondary: {
        main: '#543884',
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
