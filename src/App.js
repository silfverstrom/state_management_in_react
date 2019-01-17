import React from 'react';
import { UsersContainer } from './hoc_demo';

function App(props) {
    return (
        <div className='state-container'> 
            <div>
                <h1> A small demo demonstrating a Higher Order Component </h1>
                <UsersContainer />
            </div>
        </div>
    );
}

export default App;
