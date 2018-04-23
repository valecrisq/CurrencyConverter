import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class ExchangeRate extends React.Component {
    state = {
        rvalue: "",
    };

    handleChange = (event, index, rvalue) => this.setState({rvalue});

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

        console.log(this.state.rvalue);

        return (
            <SelectField
                hintText="Convert To"
                value={this.state.rvalue}
                onChange={this.handleChange}
                maxHeight={250}
            >
                {ratevalue}
            </SelectField>
        );
    }
}