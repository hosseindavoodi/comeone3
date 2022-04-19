import React from 'react';
import {useState} from "react";
import { VideoModal } from './Comeon';

export default function GameItems({data, dataCat, searchValue}) {

	const [shown, setShown] = useState(false)
  const [shownid, setShownid] = useState("")

  const playgame = (e) => {
    setShown(!shown);
    const shownid = e.target.id;
    setShownid(shownid);
  }


  return (
    <>
                
                {
                  
                data.map(games => (

                  /* filtering games based on category id and searchbox value */
                  games.categoryIds.includes(dataCat) && games.name.toLowerCase().includes(searchValue) ?

                  <div key={games.code} className="game item">
                  <div className="ui small image">
                      <img src={require('../' + games.icon)} alt="game-icon" />
                  </div>
                  <div className="content">
                      <div className="header"><b className="name">{games.name}</b></div>
                      <div className="description">
                      {games.description}
                     
                      </div>
                      <div className="extra">
                          <div id={games.code} onClick={playgame} className="play ui right floated secondary button inverted">
                              Play
                              <i className="right chevron icon"></i>
                          </div>

                      </div>
                  </div>
              </div>
              :
              ""
                ))
              }
               
               {
                 /* Play game component */
                      shown ? <VideoModal str={shownid} setShown={setShown} /> : null
                }
             
        </>    
  );
}
