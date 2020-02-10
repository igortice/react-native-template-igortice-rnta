import {COUNTER_CHANGE} from '~/constants/exemplo';

export const changeCount = count => ({
  type: COUNTER_CHANGE,
  payload: count,
});
