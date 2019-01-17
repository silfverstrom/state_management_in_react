import React from 'react';
import connect from './connect';

function UsersContainer(props) {
    const { dispatcher, getState } = props;

    function addNewUser() {
        dispatcher({ 
            type: 'add_new_user',
            name: 'anonymous',
            points: 0,
        });
    }

    return (
        <div className='state-container'> 
            <button onClick={() => addNewUser()}> add user </button>
            <div>{ JSON.stringify(props.data) }</div>
        </div>
    );
}

export default connect(UsersContainer);
