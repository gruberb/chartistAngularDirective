describe('chartistAngularDirective', function () {
  var $scope;
  var $compile;

  beforeEach(module('chartistAngularDirective'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('graph', function() {

    var compileGraph = function(markup, scope) {
      var el = $compile(markup)(scope);
      scope.$digest();
      return el;
    };

    it('should create a proper graph object', function() {
      expect(true).toBeTruthy();
    });

  });


});
