const myPostReducer = (state,action) => {
    if(action.type === 'ADD-POST'){
        state.posts.push(state.newPost)
        state.newPost = ''
    }
   else if(action.type === 'UPDATE-INPUT'){
    state.newPost = action.message
    }

    return state
}

export default myPostReducer;