'use strict';

describe('Controller: AppmgrctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('uiApp'));

  var AppmgrctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppmgrctrlCtrl = $controller('AppmgrctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
