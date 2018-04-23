import React from 'react';
import datajson from './Data';
import FormInput from './FormInput';
import Currencies from './Currencies';


export default class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: datajson.json,
        };

    }

    onChange(event) {
        console.log(event.target.value);
        this.inputUser = event.target.value;
        this.calculateExchangeRate();
        debugger;
        this.refs.xxx.getInputUser().focus();
    }

    cbSelectFromCurrency(currencySelect) {
        this.fromCurrencySelect = currencySelect
        this.calculateExchangeRate();
    }

    cbSelectToCurrency(currencySelect) {
        this.toCurrencySelect = currencySelect
        this.calculateExchangeRate();
    }

    calculateExchangeRate() {
        if (this.toCurrencySelect && this.fromCurrencySelect) {
            this.setState({
                result: (this.inputUser * this.toCurrencySelect.attributes.rate / this.fromCurrencySelect.attributes.rate)
            });
        }
    }

    render() {

        let showresult;
        if (this.state.result) {
            showresult = <h3>{this.state.result}</h3>
        }

        return (
            <div className={"container"}>

                <div className={"form-input"}>
                    <FormInput
                        onChange={(event) => this.onChange(event)}
                        value={this.inputUser}
                        ref={"xxx"}
                    />
                </div>

                <div className={"currencies"}>
                    <Currencies
                        data={this.state.data}
                        hintText={"Your Currency"}
                        callbackOnSelect={this.cbSelectFromCurrency.bind(this)}/>
                </div>

                <div className={"currencies"}>
                    <Currencies
                        data={this.state.data}
                        hintText={"Convert To"}
                        callbackOnSelect={this.cbSelectToCurrency.bind(this)}/>
                </div>

                {showresult}
            </div>
        );
    }
}