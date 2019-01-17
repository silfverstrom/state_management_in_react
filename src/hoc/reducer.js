function appReducer(state, action) {
    if (action.type === 'add_new_user') {
        const newUser = {
            name: action.name,
            points: action.points,
        };
        const users = [...state.users, newUser]
        return Object.assign({}, state, {users});
    }
    return {...state};
}

export default appReducer;
