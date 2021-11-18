let renderApp = () => {
    console.log('changed');
}
export  const myUsers = [
    {
        'user': 'vasya',
        'message': 'hi',
        'id': 0
    },
    {
        'user': 'petya',
        'message': 'how are you?',
        'id': 1
    },
    {
        'user': 'kolya',
        'message': 'take care!',
        'id': 2
    },
    {
        'user': 'artur',
        'message': 'what`s happening?',
        'id': 3
    }
]
export const me = {
    'myName': 'Michael',
    'photo': 'avatar',
    'newPost': '',
    'posts': [
        'hello world',
         'this is new post',
         'this is one more post',
         'also one post',
        'finally, the last post'
     ]
}

export const addPost = () => {
    me.posts.push(me.newPost)
    me.newPost = ''
    renderApp()
};

export const updateInput = (message) => {
    me.newPost = message
    renderApp()
    
};


export let subscribe = (observer) => {
    renderApp = observer
}