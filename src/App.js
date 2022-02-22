//import logo from './logo.svg';
import './scss/App.scss';
import Header from './components/Header';
import TheInput from './components/Inputs';
import SideBar from './components/SideBar';
import TheWall from './components/TheWall';
import Bio from './components/Bio';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs';
import Chat from './components/Chat';
// import {myUsers} from './data/data';
// import {me} from './data/data';
// import {addPost,updateInput} from './data/data';
//import store from './data/data';


function App({store}) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <SideBar />
      <Route path = '/' exact render = {()=><TheWall data = {store._me.posts} dispatch = {store.dispatch.bind(store)} newPost = {store.newPost}/> } />
      <Route path = '/bio' exact  render = {()=><Bio data = {store._me} />}/>
      <Route path = '/dialogs' exact render = {()=><Dialogs myUsers = {store._myUsers}/>} />
      <Route path = '/dialogs/:userId' render = {({match})=>{
        const id = match.params;
       return <Chat user = {store._myUsers} userId = {id} dispatch = {store.dispatch.bind(store)} newPost = {store.newPost}/>}}
         />
      <TheInput />
    </div>
    </BrowserRouter>
  );
}

export default App;
