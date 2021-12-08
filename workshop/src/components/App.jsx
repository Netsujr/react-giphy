import React, { useState } from 'react';
import GifList from './GifList';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState(["5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "u6uAu3yyDNqRq"]);

  //   const giphy = require('giphy-api')({
  //   apiKey: '//Keyhere',
  //   https: true
  // });


  const searchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // res.data.map((gif) => gif.id); //array with 10 gif ids
      const gifIDarray = res.data.map((gif) => gif.id);
      setGifList(gifIDarray);
    });
  };


  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGiphy={searchGiphy} />
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
