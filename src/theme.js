import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        /* background: {
            default: '#282929',
        }, */
        error: {
            main: red.A400,
        },
        input: {
            main: 'white',
        },
    },
});

export default theme;
