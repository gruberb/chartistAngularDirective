angular
  .module('chartistAngularDirective', [])
  .directive('ngChartist', ngChartist);

ngChartist.$inject = ['$compile'];

function ngChartist($compile) {
  return {
    scope: {
      data: '=',
      options: '@',
      responsiveOptions: '@',
      type: '@',
      id: '@',
      tooltips: '@'
    },
    link: link,
    restrict: 'EA'
  };

  function link(scope) {

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

    // function to bindToolTips to each value
    var bindToolTip = function (scope) {
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

    // if parameter in html is set, bind tool tips
    if(scope.tooltips) bindToolTip(scope);
  }

}
