import React, { useState } from 'react';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const giphy = require('giphy-api')({
  apiKey: 'ef7to6kp46Aiq43zlmfT175hyW1WgGo9',
  https: true
});

const App = () => {
  const [gifIdSelected, setGifIdSelected] = useState("ZG719ozZxGuThHBckn");
  const [giIdList, setGiIdList] = useState(["WuGSL4LFUMQU", "5ntdy5Ban1dIY", "LmNwrBhejkK9EFP504", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGiIdList(res.data.map((gif) => gif.id));
    });
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={giIdList} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;
