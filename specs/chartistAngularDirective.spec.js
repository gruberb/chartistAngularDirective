describe('chartistAngularDirective', function () {
  var element;

  beforeEach(function () {
    element = angular.element('<ngChartist/>');

    inject(function ($rootScope, $compile) {
      var scope = $rootScope.$new();
      $compile(element)(scope);
      scope.$digest();
    });

  });

  it('says hello', function () {
    expect(true).toBe(true);
  });
});