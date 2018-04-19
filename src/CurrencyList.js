import React from 'react';
import datajson from './Data';
import DropMenu from "./DropMenu";

export default class CurrencyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: datajson.json
        }
    }

    render() {

        console.log(this.state.data);


        const currencylist = this.state.data.map((x, index) => {
                if (!x.attributes.currency) {
                    return false;
                }
                return <DropMenu key={index}>Currency: {x.attributes.currency} - Value: {x.attributes.rate}</DropMenu>;}
            );


        return (
            <div>
                {currencylist}
            </div>
        );
    }
}