//import logo from './logo.svg';
import './scss/App.scss';
import Header from './components/Header';
import TheInput from './components/Inputs';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Profile />
      <Messages />
      <TheInput />
    </div>
  );
}

export default App;
