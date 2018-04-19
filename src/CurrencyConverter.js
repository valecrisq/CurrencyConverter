import React from 'react';
import CurrencyList from './CurrencyList';

export default class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <CurrencyList/>
            </div>
        );
    }
}