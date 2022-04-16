import React, { useEffect, useState } from 'react';
import GameItems from './GameItems';

export default function Gamelist({username, dispatch}) {

  const [data, setDate] = useState([]);
  const [dataCat, setDateCat] = useState([]);
  const [FilteredItems, setFilteredItems] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  
  
  const datafetchGames = async () => {
    const D1 = await fetch("http://localhost:3001/games");
    const response = await D1.json();
    setDate(response)
  }


  const datafetchCat = async () => {
    const D1 = await fetch("http://localhost:3001/categories");
    const response = await D1.json();
    setDateCat(response)
  }


  useEffect(()=>{
    datafetchGames();
    datafetchCat();

  },[])


  return (
    <>
    

        <div className="casino">
        <div className="ui grid centered">
            <div className="twelve wide column">
                <div className="ui list">

                    <div className="player item">
                        <img className="ui avatar image" src={require('../images/avatar/eric.jpg')} alt="avatar" />

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
            <div className="four wide column">
                <div className="search ui small icon input ">
                    <input type="text" placeholder="Search Game" onChange={(e)=>setSearchValue(e.target.value)}  />
                    <i className="search icon"></i>
                </div>
            </div>
        </div>
        <div className="ui grid">
            <div className="twelve wide column">
                <h3 className="ui dividing header">Games</h3>

                <div className="ui relaxed divided game items links">

                   <GameItems data={data} dataCat={FilteredItems} searchValue={searchValue} />

                </div>
            </div>
            <div className="four wide column">
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
        </div>
        </div>
    


        </>    
  );
}
