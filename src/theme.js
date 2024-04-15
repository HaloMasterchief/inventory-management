import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // Apply dark mode
        background: {
            default: '#333', // Set the default background color to a darker shade
        },
    },
});

export default theme;
