import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class UserCurrency extends React.Component {
    state = {
        cvalue: [],
    };

    handleChange = (event, index, cvalue) => this.setState({cvalue});



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
            <SelectField className={"select-field-currency"}
                         maxHeight={250}
                         hintText="Your Currency"
                         value={this.state.cvalue}
                         onChange={this.handleChange}
            >
                {currencyvalue}
            </SelectField>

        );
    }
}