import React from 'react';
import TextField from 'material-ui/TextField';

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
    }

    getInputUser() {
        return this.refs.inputUser;
    }

    render() {

        return (
            <div>
                <TextField
                    ref={"inputUser"}
                    floatingLabelText="Insert a value"
                    type="number"
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
                <br/>
            </div>
        )
    }
}