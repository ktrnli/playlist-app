import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/my_playlists').then((res) => {
      setPlaylists(res.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">My Playlists</h2>
      <ul className="mt-4">
        {playlists.map((pl) => (
          <li key={pl.id} className="mb-2">
            <strong>{pl.name}</strong>: {pl.tracks.total} tracks
          </li>
        ))}
      </ul>
    </div>
  );
}