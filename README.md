# chartistAngularDirective [![Build Status](https://travis-ci.org/gruberb/chartistAngularDirective.svg?branch=master)](https://travis-ci.org/gruberb/chartistAngularDirective) [![npm installs](https://img.shields.io/npm/dm/chartist-angular-directive.svg?style=flat)](https://github.com/gruberb/chartistAngularDirective)


A directive to easily integrate chartist graphs into your AngularJS application.
Chartist is a open source graph framework and has to be added to your app as well.[The API and examples can be found here](http://gionkunz.github.io/chartist-js/)

## Install
```
bower install chartist-directive --save
```

## HowTo
Insert the directive in your HTML file:

```html
<div ng-chartist id='graph_id' class="ct-chart" data='data' options='{{options}}' type='{{chartType}}' tooltips='true'></div>
```

## Parameter
- id: set manually
- class: set ct-chart to get the chartist CSS
- data: set inside controller via $scope.data
- options: set via $scope.options inside the controller
- type: set via $scope.type inside controller
- tooltips: Set a parameter, which one doesn't matter.
