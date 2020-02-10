import {COUNTER_CHANGE} from '~/constants/exemplo';

const initialState = {
  count: 0,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case COUNTER_CHANGE:
      return {...state, count: payload};

    default:
      return state;
  }
};
