import _ from 'lodash';

const baseUrl = _.trim(process.env.API_BASE_URL) || 'http://localhost:3000';
console.log(baseUrl);
export default {
  headers: {
    'Content-Type': 'application/json',
  },
  baseUrl,
};
