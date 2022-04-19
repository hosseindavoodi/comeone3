import React, { useReducer, useState, useEffect} from 'react';

import { loginReducer, userlogin } from './Functions';
import { Loginverify } from './Loginverify';
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
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: Loginverify });
    try {
      await Loginverify({ username, password, users});
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };
  
// fetching players data from login Api
  useEffect(() => {
    userlogin(setUsers);
   
  }, []);


  
  return (
    <>
  <Header />

  <div className="main container">
      
        {isLoggedIn ? (
          /* Gamelist component - loading after login success - passing players data to child component */
          <Gamelist username={username} users={users} dispatch={dispatch} />
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
