//import logo from './logo.svg';
import './scss/App.scss';
import Header from './components/Header';
import TheInput from './components/Inputs';
import SideBar from './components/SideBar';
import TheWall from './components/TheWall';
import Bio from './components/Bio';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs';
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
      <Route path = '/' render = {()=><TheWall data = {store._me.posts} updateInput = {store.updateInput.bind(store)} addPost = {store.addPost.bind(store)} newPost = {store._me.newPost}/> } />
      <Route path = '/bio'  render = {()=><Bio data = {store._me} />}/>
      <Route path = '/dialogs' render = {()=><Dialogs myUsers = {store._myUsers}/>} />
      <TheInput />
    </div>
    </BrowserRouter>
  );
}

export default App;
