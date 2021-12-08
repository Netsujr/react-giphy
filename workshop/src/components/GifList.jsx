import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIDs, setSelectedGif }) => {
  return (
    <div className="gif-list">
      {gifIDs.map((gifID) => <Gif gidID={gifID} setSelectedGif={setSelectedGif} key={gifID} />)}
    </div>
  );
};

export default GifList;
