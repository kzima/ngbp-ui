# ngbp-ui - is an angular-seed for AngularJS apps. Inspired by [angular seed](https://github.com/angular/angular-seed) and [ngbp](https://github.com/ngbp/ngbp).

##Features:
* best-practice directory structure
* angular-ui router as standard for nested views, state management and routing
* bower for external libraries management
* Twitter Bootstrap 3
* grunt for development/production work-flow
* less with source maps support
* karma testing
* live reload [Live Reload](http://livereload.com/) so you don't have to refresh browser each time you change html, js or less

You need a Live Reload browser plugin for this to work:

- Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- Firefox - [Download from Live Reload](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
- Safari - [Download from Live Reload](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)

* angular placeholders directive to mock-up images and lorem ipsum paragraphs

sample img placeholder:
<img ph-img="160x83" />

sample two paragraphs (2p) and three sentences in each (3s)
<p ph-txt="2p3s"></p>

more info here:
http://joshdmiller.github.io/angular-placeholders/

* ng-min for handling Angulr JS's dependency injection annotation

so instead of doing this:
.directive("$scope", function($scope) {...})

you can save time by just doing this instead:
.directive(function($scope) {...})


## How to use?
### Installation
1. clone https://github.com/kzima/ngbp-ui to your public folder
2. inside public folder run "npm install"
3. also get latest vendor libraries bu running "bower install" 

### Usage
1. to add new page copy and paste template folder and replace every template name in js, less, and html file (some words are case sensitive! like 'TemplateCtrl' or Template.js).
2. add newly created module to grunt_files.json 
3. add new module less file to main.less import
4. run grunt 

### Development
run 
grunt (defaults to grunt watch)

![grunt watch](https://github.com/kzima/img/grunt_watch.png "Grunt watch cmd")
![grunt watch](https://github.com/kzima/img/grunt_watch.png "Grunt watch source")

run 
"grunt test" (testing + watch)

![grunt test](https://github.com/kzima/img/grunt_test.png "Grunt test cmd")
![grunt test](https://github.com/kzima/img/grunt_test.png "Grunt test source")

### Production
run 
"grunt dist" (one off minification and code compression)

![grunt production](https://github.com/kzima/img/grunt_production.png "Grunt production cmd")
![grunt production](https://github.com/kzima/img/grunt_production.png "Grunt production source")