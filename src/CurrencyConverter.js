import React from 'react';
import datajson from './Data';
import SelectCurrency from "./SelectCurrency";
import SelectRate from "./SelectRate";
import FormInput from './FormInput';


export default class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: datajson.json
        }
    }
    //
    // onChange() {
    //     if (form)
    // }
    //

    render() {

        return (
            <div>
                <FormInput/>
                <SelectCurrency
                    onChange={() => this.onChange()}
                    data={this.state.data}/>
                <SelectRate data={this.state.data}/>
            </div>
        );
    }
}