/* Login reducer function - imported in loginM */
export function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }
    case 'login': {
      return {
        ...state,
        error: ''
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        name: action.payload1,
        avatar: action.payload2,
        event: action.payload3
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password entered',
        isLoggedIn: false,
        username: '',
        password: ''
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
        error: ''
      };
    }
    default:
      return state;
  }
}

const Api = 'http://localhost:3001/';


/* fetching games data - imported in Gamelist */
export const datafetchGames = async (setData, setError, setLoading) => {
  try {
    const D1 = await fetch(Api + "games");
      if (D1.status === 200) {
      const response = await D1.json();
      setData(response)
      setLoading(false)
        }
        else {
          throw "error"
        }
    }
    catch (error) {
      setError(true)
    }
}

/* fetching category data - imported in Gamelist */
export const datafetchCat = async (setDataCat) => {
  const D1 = await fetch(Api + "categories");
  const response = await D1.json();
  setDataCat(response)
}


