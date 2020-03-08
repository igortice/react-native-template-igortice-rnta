import GitHubService from '~/services/exemplo/GitHubService';
import ProjetoModel from '~/models/exemplo/ProjetoModel';
import Sleep from '~/utils/Sleep';

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

export const ExemploActions = {
  fetchCounter: payload => dispatch =>
    dispatch({type: TYPES.FETCH_COUNTER, payload}),

  fetchLogin: payload => async dispatch => {
    await Sleep(2000);

    dispatch({type: TYPES.FETCH_LOGIN, payload});
  },

  fetchGitHub: username => async dispatch => {
    try {
      const response = await GitHubService.myRepo(username);
      const payload = filterData(response.data);
      await Sleep(1000);

      dispatch({type: TYPES.FETCH_GITHUB, payload});
    } catch (error) {
      console.log(error);
    }
  },
};

const filterData = data => {
  return data.map(ele => new ProjetoModel(ele.id, ele.name));
};
