import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import PlaylistEditor from './pages/PlaylistEditor';
import Playlists from './pages/Playlists';
import Search from './pages/Search';

const App = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:5000';
    };

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <Link to="/">Main</Link>
              <Link to="/playlist-editor">Playlist Editor</Link>
              <Link to="/playlists">Playlists</Link>
              <Link to="/search">Search</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/playlist-editor" element={<PlaylistEditor />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  };
  
  export default App;