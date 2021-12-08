import React from 'react';
import Gif from './Gif';

const GifList = ({ gifIdList, changeSelectGif }) => {
  return (
    <div className="gif-list">
      { gifIdList.map(
        (gifId) => <Gif gifId={gifId} key={gifId} changeSelectGif={changeSelectGif} />
      )}
    </div>
  );
};

export default GifList;
