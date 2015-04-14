# chartistAngularDirective
A directive to easily integrate chartist graphs into your AngularJS application

#HowTo
Insert the directive in your HTML file:

```html
<div ng-chartist id='graph_id' class="ct-chart" data='data' options='{{options}}' type='{{chartType}}' tooltips='true'></div>
```

###Parameter
- id: set manually
- class: set ct-chart to get the chartist CSS
- data: set inside controller via $scope.data
- options: set via $scope.options inside the controller
- type: set via $scope.type inside controller
- tooltips: Set a parameter, which one doesn't matter.

