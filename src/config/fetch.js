import _ from 'lodash';

const baseUrl = _.trim(process.env.API_BASE_URL) || '';

export default {
  baseUrl,
};
