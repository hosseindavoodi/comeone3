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
        isLoggedIn: true
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
export const datafetchGames = async (setData) => {
  const D1 = await fetch(Api + "games");
  const response = await D1.json();
  setData(response)
}

/* fetching category data - imported in Gamelist */
export const datafetchCat = async (setDataCat) => {
  const D1 = await fetch(Api + "categories");
  const response = await D1.json();
  setDataCat(response)
}


