import {COUNTER_CHANGE, FETCH_GITHUB} from '~/constants/exemplo';

const initialState = {
  count: 0,
  projetos: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case COUNTER_CHANGE:
      return {...state, count: payload};
    case FETCH_GITHUB:
      return {...state, projetos: payload};
    default:
      return state;
  }
};
