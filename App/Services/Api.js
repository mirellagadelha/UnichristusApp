import apisauce from 'apisauce';
import { AppConfig } from '../Config';

const baseURL = AppConfig.getApiUrl();
console.log('BaseURL depois: ');
console.log(baseURL);

const Api = apisauce.create({baseURL});

export default Api;
