import React from 'react';
import CurrencyConverter from './CurrencyConverter';
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