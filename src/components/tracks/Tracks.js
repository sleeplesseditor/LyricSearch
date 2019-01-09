import React, { Component } from 'react';
import { Consumer } from '../../context';

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    return (
                        <React.Fragment>
                            <h1>Tracks</h1>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        );
    }
}

export default Tracks;