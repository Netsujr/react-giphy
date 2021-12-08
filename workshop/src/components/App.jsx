import React from 'react';
import GifList from './GifList';
import Gif from './Gif';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
          <div className="selected-gif">
            <Gif gifID=""/>
          </div>
        </div>
          <div className="right-scene">
            <GifList gifIDs={}/>
        </div>
      </div>
    );
  };

  /* always only return one element from component  */
  export default App;
