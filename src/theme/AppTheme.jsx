import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#481f66',
      },
      secondary: {
        main: '#543884',
      },
      error: {
        main: red.A700,
      },
      grey: {
        main: grey[200],
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
