import sinon from 'sinon';
import RestService from './RestService';

describe('The rest service', () => {
  'use strict';

  let $http;
  let service;

  beforeEach(function () {
    $http = {
      get: sinon.stub(),
      head: sinon.stub(),
      post: sinon.stub(),
      put: sinon.stub(),
      patch: sinon.stub(),
      delete: sinon.stub()
    };
    service = new RestService($http, Promise);
  });

  it('should call get on resource', () => {
    $http.get
      .withArgs('/uri/resources', {the: 'config'})
      .resolves({data: [{hello: 'world'}, {foo: 'bar'}]});

    var getCall = service.get('/uri/resources', {the: 'config'});

    return getCall.then(objects => {
      objects.should.deep.equal([{hello: 'world'}, {foo: 'bar'}]);
    });
  });

  it('should reject with data', () => {
    $http.get
      .withArgs('/uri/resources', {the: 'config'})
      .rejects({data: {error: 'the error'}});

    var getCall = service.get('/uri/resources', {the: 'config'});

    return getCall.should.be.rejected.then(rejection => {
      rejection.should.deep.equal({error: 'the error'});
    });
  });

  it('should call head on resource', () => {
    $http.head
      .withArgs('/uri/resources', {the: 'config'})
      .resolves({data: [{hello: 'world'}, {foo: 'bar'}]});

    var headCall = service.head('/uri/resources', {the: 'config'});

    return headCall.then(objects => {
      objects.should.deep.equal([{hello: 'world'}, {foo: 'bar'}]);
    });
  });

  it('should call post on resource', () => {
    $http.post
      .withArgs('/uri/resources', {the: 'data'})
      .resolves({data: [{hello: 'world'}, {foo: 'bar'}]});

    var postCall = service.post('/uri/resources', {the: 'data'});

    return postCall.then(objects => {
      objects.should.deep.equal([{hello: 'world'}, {foo: 'bar'}]);
    });
  });

  it('should call put on resource', () => {
    $http.put
      .withArgs('/uri/resources', {the: 'data'})
      .resolves({data: [{hello: 'world'}, {foo: 'bar'}]});

    var putCall = service.put('/uri/resources', {the: 'data'});

    return putCall.then(objects => {
      objects.should.deep.equal([{hello: 'world'}, {foo: 'bar'}]);
    });
  });

  it('should call patch on resource', () => {
    $http.patch
      .withArgs('/uri/resources', {the: 'data'})
      .resolves({data: [{hello: 'world'}, {foo: 'bar'}]});

    var patchCall = service.patch('/uri/resources', {the: 'data'});

    return patchCall.then(objects => {
      objects.should.deep.equal([{hello: 'world'}, {foo: 'bar'}]);
    });
  });

  it('should call delete on resource', () => {
    $http.delete
      .withArgs('/uri/resources', {the: 'config'})
      .resolves({data: [{hello: 'world'}, {foo: 'bar'}]});

    var deleteCall = service.delete('/uri/resources', {the: 'config'});

    return deleteCall.then(objects => {
      objects.should.deep.equal([{hello: 'world'}, {foo: 'bar'}]);
    });
  });
});
