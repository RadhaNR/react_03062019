export const addUser = (user) => {
    console.log("in action", user)
    return {
        type: 'addUser',
        user
    }
}

export const removeUser = (sapId) => {
    return {
        type: 'removeUser',
        sapId
    }
}