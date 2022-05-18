import myPostReducer from "./myPostReducer";
import chatReducer from "./chatReducer";

const store = {
    renderApp() {
        console.log('changed');
    },
    _myUsers: [
        {
            'newPost': '',
            'user': 'vasya',
            'message': 'hi',
            'answer': [],
            'id': 0
        },
        {
            'newPost': '',
            'user': 'petya',
            'message': 'how are you?',
            'answer': [],
            'id': 1
        },
        {
            'newPost': '',
            'user': 'kolya',
            'message': 'take care!',
            'answer': [],
            'id': 2
        },
        {
            'newPost': '',
            'user': 'artur',
            'message': 'what`s happening?',
            'answer': [],
            'id': 3
        }
    ],
    _me: {
       'newPost': '',
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
        console.log(action,this._myUsers,i);
         this._myUsers = chatReducer(this._myUsers,action,i);
         this._me = myPostReducer(this._me,action);

         this.renderApp()
        // if(action.type === 'ADD-POST'){
        //     this._me.posts.push(this.newPost)
        //     this.newPost = ''
        //     this.renderApp()
        // }
    //    else if(action.type === 'UPDATE-INPUT'){
    //     this.newPost = action.message
    //     this.renderApp()
    //     }
         if(action.type === 'ADD-ANSWER'){
            this._myUsers[i].answer.push(this.newPost)
            this.newPost = ''
            this.renderApp()
        }
    },


    subscribe(observer) {
        this.renderApp = observer
    }
}
export default store;