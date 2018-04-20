import React from 'react';
import TextField from 'material-ui/TextField';

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const TextFieldExample = () => (
            <div>
                <TextField
                    floatingLabelText="Insert a value"
                    type="number"
                />
                <br />
            </div>
        );


        return (
            <TextFieldExample/>
        );
    }
}