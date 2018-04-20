import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectRate extends React.Component {
    state = {
        values: [],
    };

    handleChange = (event, index, values) => this.setState({values});

    render() {

        const ratevalue = this.props.data.map((singlevalue, index) => {
            if (!singlevalue.attributes.rate) {
                return false;
            }
            return (
                <MenuItem
                    key={index}
                    insetChildren={true}
                    value={singlevalue}
                    primaryText={singlevalue.attributes.currency}
                    secondaryText={singlevalue.attributes.rate}
                />
            )
        });



        return (
            <SelectField
                hintText="Currency Exchange Rate"
                value={this.state.values}
                onChange={this.handleChange}
            >
                {ratevalue}
            </SelectField>
        );
    }
}