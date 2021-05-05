import { createMuiTheme }  from '@material-ui/core/styles'
import {responsiveFontSizes} from "@material-ui/core";

let Theme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: '#2BA837',
                },
                '&$active': {
                    color: '#2BA837',
                },
            },
            active: {},
            completed: {},
        }
    },
    typography: {
        fontFamily: '"Baloo Bhai 2", cursive',
        h3: {
            fontWeight: 600
        },
        h4: {
            fontWeight: 700
        },
        h5: {
            fontWeight: 500
        },
        button: {
            fontWeight:600,
            fontSize: 16
        }
    },
    palette: {
        secondary: {
            main: "#2BA837",
        }
    }
})
Theme = responsiveFontSizes(Theme);

export default Theme