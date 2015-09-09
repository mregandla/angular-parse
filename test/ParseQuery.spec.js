var module = angular.mock.module;
var inject = angular.mock.inject;

describe('ParseQuery', function () {
  beforeEach(module('ngParse'));

  beforeEach(function () {
    ParseInitialize();
  });

  describe('equal', function () {
    it('should equal Parse.Query', function () {
      inject(function (ParseQuery) {
        expect(ParseQuery).toEqual(global.Parse.Query);
      });
    });
  });
});
