import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: green[500],
      main: green[700],
      dark: green[800],
      contrastText: '#fff',
    },
    secondary: {
      light: green[500],
      main: green[700],
      dark: green[800],
      contrastText: '#000',
    },
    background: {
      paper: '#fff',
      default: '#f7f6f3',
    }
  },
});
