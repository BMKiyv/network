export const addingPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const hundleNewPostActionCreator = (text) => {
    return {
        type:'UPDATE-INPUT', 
        message: text
    }
}

export const hundleNewChatActionCreator = (text) => {
    return {
        type:'UPDATE-CHAT', 
        message: text
    }
}

export const addingAnswerActionCreator = () => {
    return{
        type: 'ADD-ANSWER'
    }
}