import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Playlists from './pages/Playlists';
import PlaylistEditor from './pages/PlaylistEditor';
import Home from './pages/Home';

const Main = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/edit/:id" element={<PlaylistEditor />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

export default Main;