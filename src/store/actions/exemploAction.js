import {COUNTER_CHANGE, FETCH_GITHUB} from '~/constants/exemplo';

import GitHubService from '~/services/exemplo/GitHubService';
import ProjetoModel from '~/models/exemplo/ProjetoModel';
import Sleep from '~/utils/Sleep';

export const changeCount = count => ({
  type: COUNTER_CHANGE,
  payload: count,
});

export const fetchGitHubProjects = username => async dispatch => {
  try {
    const response = await GitHubService.myRepo(username);
    await Sleep(2000);
    const payload = response.data.map(
      ele => new ProjetoModel(ele.id, ele.name),
    );
    dispatch({type: FETCH_GITHUB, payload});
  } catch (error) {
    console.log(error);
  }
};
