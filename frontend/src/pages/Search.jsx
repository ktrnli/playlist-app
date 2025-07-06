import { useState } from 'react';
import axios from 'axios';
import React from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.get(`http://localhost:5000/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Search Songs</h2>
      <input
        className="border p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for songs"
      />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2" onClick={handleSearch}>
        Search
      </button>
      <ul className="mt-4">
        {results.map((track) => (
          <li key={track.id} className="mb-2">
            {track.name} — {track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  );
}