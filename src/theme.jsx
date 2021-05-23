import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
// Create a theme instance.

const theme = createMuiTheme({
  palette: {
    type:"dark",
    primary: {
      main:purple[900], 
    }
  },
});

export default theme;
