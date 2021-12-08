import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIDs } = props;
  const gifIDs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  return (
    <div className="gif-list">
    {gifIDs.map((gifID) => <Gif gidID={gifID} key={gifID} />)}
    </div>
    );
  };

  export default GifList;
