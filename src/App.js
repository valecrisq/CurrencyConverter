import React from 'react';
import CurrencyConverter from './CurrencyList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <CurrencyConverter/>
      </MuiThemeProvider>
    );
  }
}