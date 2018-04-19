import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class DropMenu extends React.Component {


    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <DropDownMenu maxHeight={300} value={this.props.x} onChange={this.handleChange}>
                {items}
            </DropDownMenu>
        );
    }
}