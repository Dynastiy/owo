import auth from './auth'
import members from './members'
import news from './news'
import config from './config' 

export const services = {
  auth,
  members,
  news,
  config
};

// Optionally, if you want to access all services via a single object
export default services;