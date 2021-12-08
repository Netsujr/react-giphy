import React, { useState } from 'react';
import GifList from './GifList';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState(["5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "u6uAu3yyDNqRq"]);
  // const selectedGif = "";
  // const gifList = [];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

/* always only return one element from component  */
export default App;
