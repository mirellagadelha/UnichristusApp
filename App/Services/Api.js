import apisauce from 'apisauce';
import { AppConfig } from '../Config';

const baseURL = AppConfig.getApiUrl();
const Api = apisauce.create({baseURL});

export default Api;
