import { useParams } from 'react-router-dom';

export default function PlaylistEditor() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Edit Playlist {id}</h2>
      {/* Add track listing, add/remove songs UI here */}
    </div>
  );
}