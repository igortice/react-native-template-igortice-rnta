import axios from 'axios';

export const GITHUB = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 5000,
  headers: {'content-type': 'application/json'},
});

export default class GitHubService {
  static myRepo = async username => {
    const options = {
      method: 'GET',
      url: `users/${username}/repos`,
    };

    return await GITHUB(options);
  };
}
