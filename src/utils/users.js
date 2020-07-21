const users = []

// add user
const addUser = ({id, username, room}) => {
    // Clean the data

    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    // Validate the Data
    if (!username || !room) {
        return {
            error: 'Username and room are required'
        }
    }
    // Check for Existing User
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    // Validating Username
    if (existingUser) {
        return {
            error: 'Username is in the room already!!'
        }
    }
    // Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

// remove user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

// get user
const getUser = (id) => {
    const user = users.find((user) => user.id === id)
    return user
}

// get users in room
const getUsersInRoom = (room) => {
    const usersInRoom = users.filter((user) => user.room === room.trim().toLowerCase())
    return usersInRoom
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}