import React from 'react';
import Converter from './Converter/Converter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Converter/>
      </MuiThemeProvider>
    );
  }
}