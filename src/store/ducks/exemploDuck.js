import GitHubService from '~/services/exemplo/GitHubService';
import ProjetoModel from '~/models/exemplo/ProjetoModel';

export const TYPES = {
  FETCH_COUNTER: 'FETCH_COUNTER',
  FETCH_GITHUB: 'FETCH_GITHUB',
  FETCH_LOGIN: 'FETCH_LOGIN',
};

const initialState = {
  count: 0,
  projetos: [],
  login: {email: '', password: ''},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPES.FETCH_COUNTER:
      return {...state, count: payload};
    case TYPES.FETCH_GITHUB:
      return {...state, projetos: payload};
    case TYPES.FETCH_LOGIN:
      return {...state, login: payload};
    default:
      return state;
  }
};

export const ExemploCreators = {
  fetchCounter: payload => dispatch =>
    dispatch({type: TYPES.FETCH_COUNTER, payload}),

  fetchLogin: payload => async dispatch => {
    dispatch({type: TYPES.FETCH_LOGIN, payload});

    return true;
  },

  fetchGitHub: username => async dispatch => {
    try {
      const response = await GitHubService.myRepo(username);

      const payload = filterData(response.data);
      dispatch({type: TYPES.FETCH_GITHUB, payload});

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

const filterData = data => {
  return data.map(ele => new ProjetoModel(ele.id, ele.name));
};
