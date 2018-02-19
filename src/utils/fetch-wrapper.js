import _ from 'lodash';

import config from '../config/fetch';

export class FetchError extends Error {
  constructor(response) {
    super(response.statusText);
    this.response = response;
  }
}

export class FetchWrapper {
  constructor({ headers = {}, baseUrl = '', afterRequest = (res) => res }) {
    this.headers = headers;
    this.defaultHeaders = headers;
    this.baseUrl = baseUrl;
    this.afterRequest = afterRequest;
  }

  ajax(_url, _opts) {
    const opts = _.cloneDeep(_opts);
    let url = _url;

    opts.body = JSON.stringify(opts.body);

    // If the request is external, do not use auth/default headers and do not assign the base url
    if(!url.includes('http')) {
      opts.headers = Object.assign({}, this.headers, opts.headers);
      url = `${this.baseUrl}${url}`;
    }

    return fetch(url, opts)
    .then(this.afterRequest.bind(this))
    .then((res) => {
      if(res.status >= 200 && res.status < 400) return res;
      throw new FetchError(res);
    });
  }
  get(url, headers = {}) {
    return this.ajax(url, { method: 'GET', headers });
  }
  post(url, body = {}, headers = {}) {
    return this.ajax(url, { method: 'POST', body, headers });
  }
  delete(url, body = {}, headers = {}) {
    return this.ajax(url, { method: 'DELETE', body, headers });
  }
  patch(url, body = {}, headers = {}) {
    return this.ajax(url, { method: 'PATCH', body, headers });
  }
  put(url, body = {}, headers = {}) {
    return this.ajax(url, { method: 'PUT', body, headers });
  }

  setHeaders(headers) {
    this.headers = Object.assign({}, this.headers, headers);
  }

  resetHeaders() {
    this.headers = _.cloneDeep(this.defaultHeaders);
  }
}

export default new FetchWrapper(config);
