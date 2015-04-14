angular.module( 'chartistAngularDirective', [])
.directive('ngChartist', ['$compile', function($compile) {
  var renderGraph = function(scope) {
    var graph = Chartist[scope.type]('#' + scope.id, scope.data, scope.options, scope.responsiveOptions);

    // set watcher for future data updates
    scope.$watch('data', function(newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }
      graph.update(scope.data, true);
    }, true);

    // set watcher for future options update
    scope.$watch('options', function(newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }
      graph.update(scope.options, true);
    }, true);

  };

  var bindTooltip = function(scope) {
    var $chart = $('#' + scope.id);

    var $toolTip = $chart
      .append($compile('<div class="tooltip"></div>')(scope))
      .find('.tooltip')
      .hide();

    $chart.on('mouseenter', '.ct-point', function() {
      var $point = $(this);
      var value = $point.attr('ct:value');
      $toolTip.html(value).show();
    });

    $chart.on('mouseleave', '.ct-point', function() {
      $toolTip.hide();
    });

    $chart.on('mousemove', function(event) {
      $toolTip.css({
        left: (event.pageX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
        top: (event.pageY || event.originalEvent.layerY) - $toolTip.height() - 40
      });
    });
  };

  var graphControl = function(scope, elem, attrs) {
    renderGraph(scope);

    if(scope.tooltips) {
      bindTooltip(scope);
    }

  };

  return {
    scope: {
      data: '=',
      options: '@',
      responsiveOptions: '@',
      type: '@',
      id: '@',
      tooltips: '@'
    },
    link: graphControl
  };
}])
