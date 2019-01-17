import React, { Component } from 'react';
import store from './state';

function connect(WrappedComponent) {
    const dispatcher = store.dispatcher.bind(store);
    return class extends React.Component {
        state = {
        }
        componentDidMount() {
            store.subscribe(() => {
                this.setState(store.getState())
            });
        }
        render() {
            return (
                <WrappedComponent 
                    data={this.state} 
                    dispatcher={dispatcher} 
                />
            );
        }
    }
}

export default connect;
