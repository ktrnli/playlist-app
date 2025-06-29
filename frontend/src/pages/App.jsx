import React from 'react';

export default function App() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000';
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Music App</h1>
      <button className="bg-green-500 text-white px-4 py-2 mt-4" onClick={handleLogin}>
        Login with Spotify
      </button>
    </div>
  );
}