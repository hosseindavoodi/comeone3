import React, { useEffect, useState } from 'react';
import GameItems from './GameItems';
import { datafetchGames, datafetchCat} from './Functions';

export default function Gamelist({username, dispatch, users}) {

  const [data, setDate] = useState([]);
  const [dataCat, setDateCat] = useState([]);
  const [FilteredItems, setFilteredItems] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  
  
  useEffect(()=>{
    datafetchGames(setDate);
    datafetchCat(setDateCat);
  },[])
  

  return (
    <>
    

        <div className="casino">
        <div className="ui grid centered">
            <div className="twelve wide column floatL">
                <div className="ui list">

                    <div className="player item">
                    <img className="ui avatar image" src={require('../' + users.find(x => x.username === username).avatar)} alt="avatar" />

                        <div className="content">
                            <div className="header"><b className="name">{username}!</b></div>
                            <div className="description event"></div>
                        </div>
                    </div>

                </div>
                <div className="logout ui left floated secondary button inverted" onClick={() => dispatch({ type: 'logout' })}>
					<i className="left chevron icon"></i>Log Out
				</div>
            </div>
            <div className="four wide searchbox">
                <div className="search ui small icon input ">
                    <input type="text" placeholder="Search Game" onChange={(e)=>setSearchValue(e.target.value)}  />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>
        <div className="ui grid">
        <div className="four wide CatergoryR">
                <h3 className="ui dividing header">Categories</h3>

                <div className="ui selection animated list category items">
                    {
                        dataCat.map(cat=>(
                            <div key={cat.id} className="category item">
                                    <div className="header" onClick={(e) => setFilteredItems(cat.id)} >{cat.name}</div>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
            <div className="twelve wide Gamelist">
                <h3 className="ui dividing header">Games</h3>

                <div className="ui relaxed divided game items links">

                   <GameItems data={data} dataCat={FilteredItems} searchValue={searchValue} />

                </div>
            </div>
            
        </div>
        </div>
    


        </>    
  );
}
