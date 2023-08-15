const initial = {
    users: [],
    loggedUser: null,
}

const userinfihandler = (state = initial, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
            break;
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
            break;
        default:
            return state
            break;
    }
}
export default userinfihandler