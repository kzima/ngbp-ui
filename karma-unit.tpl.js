module.exports = function(config) {
  config.set({
    /** 
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: ['settings.js', <% scripts.forEach(function(file) { %> '<%= file %>', <%
    }); %> , 'lib/angular-mocks/angular-mocks.js', 'src/**/*.js'],
    exclude: ['src/_template/*.js'],
    frameworks: ['jasmine'],
    plugins: [
        'karma-jasmine',
        //'karma-phantomjs-launcher', 
        'karma-firefox-launcher',
        'karma-chrome-launcher'
    ],

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /** 
     * Disable file watching by default.
     */
    autoWatch: false,

    // Start the browser
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
        'Chrome'
    ]
  });
};