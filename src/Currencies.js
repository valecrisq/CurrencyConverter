import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Currencies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cvalue: ''
        }
    }

    handleChange = (event, index, cvalue) => {
        this.setState({cvalue});
        this.props.callbackOnSelect(cvalue);
    };


    render() {

        const currencyvalue = this.props.data.map((singlevalue, index) => {
            if (!singlevalue.attributes.currency) {
                return false;
            }
            return (
                <MenuItem
                    key={index}
                    value={singlevalue}
                    primaryText={singlevalue.attributes.currency}
                    secondaryText={singlevalue.attributes.rate}
                    onChange={this.onChange}
                />
            )
        });

        return (
                <SelectField className={"select-field-currency"}
                             maxHeight={250}
                             hintText={this.props.hintText}
                             value={this.state.cvalue}
                             onChange={this.handleChange}
                >
                    {currencyvalue}
                </SelectField>
        );
    }
}