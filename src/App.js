//import logo from './logo.svg';
import './scss/App.scss';
import logo from './img/logoN.webp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {logo} alt = 'logo'/>
        <nav>
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
            <li>fourth</li>
          </ul>
        </nav>
      </header>
      <div className='profile'>
        <a href='/' className = 'anchor'>Profile</a>
        <a href='/' className = 'anchor'>Messages</a>
        <a href='/' className = 'anchor'>News</a>
        <a href='/' className = 'anchor'>Music</a>
        <a href='/' className = 'anchor'>Settings</a>

      </div>
      <div className='messages'>Messages</div>
      <div className='content'>Content</div>
    </div>
  );
}

export default App;
