import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#262254',
      },
      secondary: {
        main: '#543884',
      },
      error: {
        main: red.A700,
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
