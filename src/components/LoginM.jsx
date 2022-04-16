import React, { useReducer, useEffect, useRef } from 'react';

import { verifyLogin } from './verifyLogin';
import { loginReducer } from './Functions';
import Gamelist from './Gamelist';
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
  const { username, password, isLoggedIn, error, isFocused } = state;
  const usernameRef = useRef(null);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: verifyLogin });
    try {
      await verifyLogin({ username, password });
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  useEffect(() => {
    if (isFocused) {
      usernameRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
   <div className="ui one column center aligned page grid">
    <div className="column twelve wide">
        <img src={require('../images/logo.svg')} alt="logo" />
    </div>
  </div>

  <div className="main container">
 
      
        {isLoggedIn ? (
      
          <Gamelist username={username} dispatch={dispatch} />
      
        ) : (

          <div className="login">
          <div className="ui grid centered">
              <form onSubmit={handleSubmit}>
              {error && <p className="error">{error} </p>}
                  <div className="fields">
                      <div className="required field">
                          <div className="ui icon input">
                              <input type="text" name="username" placeholder="Username" ref={usernameRef} value={username} 
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
                              <input type="submit" value="Login" />
                              <i className="right chevron icon"></i>
                              {error}
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
