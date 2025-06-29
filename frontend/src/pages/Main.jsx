import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Search from './pages/Search';
import MyPlaylists from './pages/MyPlaylists';
import PlaylistEditor from './pages/PlaylistEditor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlists" element={<MyPlaylists />} />
        <Route path="/edit/:id" element={<PlaylistEditor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
export default Main