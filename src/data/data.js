const store = {
    renderApp() {
        console.log('changed');
    },
    _myUsers: [
        {
            'user': 'vasya',
            'message': 'hi',
            'answer': '',
            'id': 0
        },
        {
            'user': 'petya',
            'message': 'how are you?',
            'answer': '',
            'id': 1
        },
        {
            'user': 'kolya',
            'message': 'take care!',
            'answer': '',
            'id': 2
        },
        {
            'user': 'artur',
            'message': 'what`s happening?',
            'answer': '',
            'id': 3
        }
    ],
    newPost: '',
    _me: {
        'myName': 'Michael',
        'photo': 'avatar',
        'posts': [
            'hello world',
            'this is new post',
            'this is one more post',
            'also one post',
            'finally, the last post'
        ]
    },

    // addPost() {
    //     this._me.posts.push(this._me.newPost)
    //     this._me.newPost = ''
    //     this.renderApp()
    // },

    // updateInput(message) {
    //     this._me.newPost = message
    //     this.renderApp()

    // },

    dispatch(action,i) {
        if(action.type === 'ADD-POST'){
            this._me.posts.push(this.newPost)
            this.newPost = ''
            this.renderApp()
        }
       else if(action.type === 'UPDATE-INPUT'){
        this.newPost = action.message
        this.renderApp()
        }
        else if(action.type === 'ADD-ANSWER'){
            this._myUsers[i].answer = this.newPost
            this.newPost = ''
            this.renderApp()
        }
    },


    subscribe(observer) {
        this.renderApp = observer
    }
}
export default store;