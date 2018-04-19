import React from 'react';
import datajson from './Data';

export default class ValueContainer extends React.Component {
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
                return <h4 key={index}>Currency: {x.attributes.currency} - Value: {x.attributes.rate}</h4>;}
            );


        return (
            <div>
                {currencylist}
            </div>
        );
    }
}
