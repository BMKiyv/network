const store = {
renderApp() {
    console.log('changed');
},
_myUsers:[
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
],
_me : {
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
},

addPost() {
    this._me.posts.push(this._me.newPost)
    this._me.newPost = ''
    this.renderApp()
},

updateInput(message){
    this._me.newPost = message
    this.renderApp()
    
},


subscribe(observer){
    this.renderApp = observer
}
}
export default store;