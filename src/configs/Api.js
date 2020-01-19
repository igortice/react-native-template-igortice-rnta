import axios from 'axios';

export const API_BASE = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {'content-type': 'application/json'},
});

export const API_MOCK = axios.create({
  baseURL: 'http://www.amock.io/api/igortice/',
  timeout: 5000,
  headers: {'content-type': 'application/json'},
});
