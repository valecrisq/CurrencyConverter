import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectCurrency extends React.Component {
    state = {
        values: [],
    };

    handleChange = (event, index, values) => this.setState({values});

    render() {

        const currencyvalue = this.props.data.map((singlevalue, index) => {
            if (!singlevalue.attributes.currency) {
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
            <div>
                <SelectField className={"select-field-currency"}
                    color={"red"}
                    hintText="Your Currency"
                    value={this.state.values}
                    onChange={this.handleChange}
                >
                    {currencyvalue}
                </SelectField>
            </div>

    );
    }
}