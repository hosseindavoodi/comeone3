
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
        error: '',
        isFocused: true
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
        password: '',
        isFocused: true
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

export const userlogin = async (setUsers) => {
  const Datalogin = await fetch(Api + "login");
  const response = await Datalogin.json();
  setUsers(response)
}


export const datafetchGames = async (setDate) => {
  const D1 = await fetch(Api + "games");
  const response = await D1.json();
  setDate(response)
}


export const datafetchCat = async (setDateCat) => {
  const D1 = await fetch(Api + "categories");
  const response = await D1.json();
  setDateCat(response)
}


