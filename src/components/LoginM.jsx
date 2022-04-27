import React, { useReducer, useState, useEffect} from 'react';

import { loginReducer} from './Functions';
import Gamelist from './Gamelist';
import Header from './Header';
import './../stylesheets/semantic.css';
import './../stylesheets/styles.css';

const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  error: ''
};



export default function LoginM() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoggedIn, error} = state;
  const [users, setUsers] = useState();

  
// sending data to loginverify and get the response
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      })
        })
        .then( response => response.json())
        .then(data => {
      if (data.status === 'success'){
        dispatch({ type: 'success' });
        console.log(data.player.name);
        setUsers(data.player.name)
        }
        else {
          console.log("fasdfas");
          dispatch({ type: 'error' });
        }
       })

  };
  
// fetching players data from login Api
  useEffect(() => {
  }, []);


  
  return (
    <>
  <Header />

  <div className="main container">
      
        {isLoggedIn ? (
          /* Gamelist component - loading after login success - passing players data to child component */
          <Gamelist user={users} dispatch={dispatch} />
        ) : (

          <div className="login">
          <div className="ui grid centered">
              <form onSubmit={handleSubmit}>
              
                  <div className="fields">
                      <div className="required field">
                          <div className="ui icon input">
                              <input type="text" name="username" placeholder="Username" value={username} 
                              autoFocus
                              onChange={e =>
                                dispatch({
                                  type: 'field',
                                  fieldName: 'username',
                                  payload: e.currentTarget.value
                                })
                              }
                            />
                              <i className="user icon"></i>
                          </div>
                      </div>
                      <div className="required field">
                          <div className="ui icon input">
                              <input type="password" name="password" placeholder="Password" 
                              value={password}
                              onChange={e =>
                                dispatch({
                                  type: 'field',
                                  fieldName: 'password',
                                  payload: e.currentTarget.value
                                })
                              }
                              />
                              <i className="lock icon"></i>
                          </div>
                      </div>
                      <div className="field">
                        
                          <div className="ui icon input">
                              <input type="submit" value="Login" className='loginbtn' name="Login" />
                              {<p className="error">{error} </p>}
                          </div>
                          
                      </div>
                  </div>
              </form>
          </div>
      </div>


        )}
     </div>
     </>
  );
}
