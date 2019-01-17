import React, { Component } from 'react';
import HocDemo from './hoc/HocDemo';

function App(props) {
    return (
        <div className='state-container'> 
            <div>
                <h1> A small demo demonstrating a Higher Order Component </h1>
                <HocDemo />
            </div>
        </div>
    );
}

export default App;
