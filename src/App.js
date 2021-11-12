//import logo from './logo.svg';
import './scss/App.scss';
import Header from './components/Header';
import TheInput from './components/Inputs';
import SideBar from './components/SideBar';
import TheWall from './components/TheWall';
import Bio from './components/Bio';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs';
import {myUsers} from './data/data';
import {me} from './data/data';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <SideBar />
      <Route path = '/main'exact render = {()=><TheWall data = {me.posts}/> } />
      <Route path = '/bio' exact render = {()=><Bio data = {me} />}/>
      <Route path = '/dialogs' exact render = {()=><Dialogs myUsers = {myUsers}/>} />
      <TheInput />
    </div>
    </BrowserRouter>
  );
}

export default App;
