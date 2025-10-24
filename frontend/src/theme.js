import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#125A7C',       // KTC-inspired green/teal
      contrastText: '#fff',  // white on primary
    },
    secondary: {
      main: '#E46E1A',       // orange accent
      contrastText: '#fff',  // white on secondary
    },
    background: {
      default: '#FFFFFF',    // white page background
      paper: '#FFFFFF',      // white for paper surfaces
    },
    text: {
      primary: '#444444',    // dark/charcoal for main text
      secondary: '#555555',  // slightly lighter for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.1)', 
        },
      },
    },
  },
});

export default theme;
