const initialState = [];

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addUser':
            return [...state, action.user];
        case 'removeUser':
            return state.filter(item => item.sapId !== action.sapId);
        default:
            return state;
    }

}