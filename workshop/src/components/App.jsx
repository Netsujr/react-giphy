import React { useState } from 'react';
import GifList from './GifList';
import Gif from './Gif';
import SearchBar from './SearchBar';
import { useState } from 'react';

const App = () => {
  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState("WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq");
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
        <GifList gifIDs={gifList} />
      </div>
    </div>
  );
};

/* always only return one element from component  */
export default App;
