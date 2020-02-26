import {COUNTER_CHANGE, FETCH_GITHUB, LOGIN_CHANGE} from '~/constants/exemplo';

const initialState = {
  count: 0,
  projetos: [],
  login: {email: '', password: ''},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case COUNTER_CHANGE:
      return {...state, count: payload};
    case FETCH_GITHUB:
      return {...state, projetos: payload};
    case LOGIN_CHANGE:
      return {...state, login: payload};
    default:
      return state;
  }
};
