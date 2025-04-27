const initState = {
    users: [
        { id: 1, name: 'John Doe', email: 'test@gmail.com'},
        { id: 2, name: 'Jane Doe', email: 'test1@gmail.com'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;