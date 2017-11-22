import axios from 'axios';

export const openDota = axios.create({
  baseURL: 'https://api.opendota.com/api'
});

export const openDotaURI = 'https://api.opendota.com';
