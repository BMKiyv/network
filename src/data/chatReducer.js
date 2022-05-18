const chatReducer = (state,action,i) => {
        if(action.type === 'UPDATE-CHAT'){
            state[i].newPost = action.message
            }
            else if(action.type === 'ADD-ANSWER'){
                state[i].answer.push(state[i].newPost)
                state[i].newPost = ''
            }

    return state
}

export default chatReducer;