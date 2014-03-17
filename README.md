# ngbp-ui - is an angular-seed for AngularJS apps. Inspired by [angular seed](https://github.com/angular/angular-seed) and [ngbp](https://github.com/ngbp/ngbp)

##Features:
* best-practice directory structure
* angular-ui router as standard for nested views, state management and routing
* bower for external libraries management
* Twitter Bootstrap 3
* grunt for development/production work-flow
* less with source maps support
* karma testing
* live reload so you don't have to refresh browser each time you change html, js or less
* angular placeholders directive to mock-up images and lorem ipsum paragraphs
* ng-min for handling Angulr JS's dependency injection annotation

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

### Live reload usage
You need a Live Reload browser plugin for this to work:
Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
Firefox - [Download from Live Reload](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
Safari - [Download from Live Reload](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)
You can find more info [here](http://livereload.com/)

### Angular Placeholder usage

sample img placeholder:
`<img ph-img="160x83" />`

sample two paragraphs (2p) and three sentences in each (3s)
`<p ph-txt="2p3s"></p>`

more info at [joshdmiller's github page](http://joshdmiller.github.io/angular-placeholders/):

### Ng-min grunt usage
This is run as part of the grunt and you really need to follow [ng-min guidelines](https://github.com/btford/ngmin) so to make sure its pre-minified correctly:

### Development
run 
"grunt" (defaults to grunt watch)

![grunt watch](https://raw.github.com/kzima/ngbp-ui/master/img/grunt_watch_cmd.jpg "Grunt watch cmd")
![grunt watch](https://raw.github.com/kzima/ngbp-ui/master/img/grunt_watch_src.jpg "Grunt watch source")

### Production
run 
"grunt dist" (one off minification and code compression, it also ads version number to min.js and min.css file based on package.json version)

![grunt production](https://raw.github.com/kzima/ngbp-ui/master/img/grunt_production_cmd.jpg "Grunt production cmd")
![grunt production](https://raw.github.com/kzima/ngbp-ui/master/img/grunt_production_src.jpg "Grunt production source")

### Testing
run 
"grunt test" (testing + watch)

![grunt test](https://raw.github.com/kzima/ngbp-ui/master/img/grunt_test_cmd.jpg "Grunt test cmd")
