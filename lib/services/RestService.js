class RestService {

  /* @ngInject */
  constructor($http, $q) {
    this._$http = $http;
    this._$q = $q;
  }

  get(uri, configuration) {
    return this._promiseData(this._$http.get(uri, configuration || {}));
  }

  head(uri, configuration) {
    return this._promiseData(this._$http.head(uri, configuration || {}));
  }

  post(uri, data, configuration) {
    return this._promiseData(this._$http.post(uri, data, configuration || {}));
  }

  put(uri, data, configuration) {
    return this._promiseData(this._$http.put(uri, data, configuration || {}));
  }

  patch(uri, data, configuration) {
    return this._promiseData(this._$http.patch(uri, data, configuration || {}));
  }

  delete(uri, configuration) {
    return this._promiseData(this._$http.delete(uri, configuration || {}));
  }

  _promiseData(promise) {
    return promise
      .then(response => {
        return response.data;
      })
      .catch(response => {
        return this._$q.reject(response.data);
      });
  }
}

export default RestService;
