import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#072c4a',
      },
      secondary: {
        main: '#0087db',
      },
      error: {
        main: red.A700,
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
