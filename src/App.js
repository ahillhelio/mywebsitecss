import React from 'react'; //KOSHER
import MyWebSite from './MyWebSite'//KOSHER
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import {
  BrowserRouter as Router,
} from "react-router-dom";

//Lines 7 thru 12 KOSHER
// function App() { 
//   return (
//     <MyWebSite/>
    
//   )
// }

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Dark
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <Router>
     
        <MyWebSite/>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton />

      </Router>
    );
  }
}


export default App; 


