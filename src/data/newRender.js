import {me} from './data';
import {renderApp} from '../index'

export const addPost = () => {
    me.posts.push(me.newPost)
    renderApp()
};

export const updateInput = (message) => {
    me.newPost = message
    renderApp()
    
};