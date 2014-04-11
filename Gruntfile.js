module.exports = function(grunt) {
  
  // source files reference
  var grunt_files = grunt.file.readJSON("grunt_files.json");
  var app_files = [];
  var lib_files = [];
  var build_files = [];
  for (var i = 0; i < grunt_files.app_files.length; i++) {
    app_files.push('src/'+grunt_files.app_files[i]);
    build_files.push('build/'+grunt_files.app_files[i]);
  }
  for (var j = 0; j < grunt_files.lib_files.length; j++) {
    lib_files.push('lib/'+grunt_files.lib_files[j]);
  }

  // grunt config
  grunt.initConfig({

    // global congiguration
    app_files: app_files,
    lib_files: lib_files,
    build_files: build_files,
    pkg: grunt.file.readJSON("package.json"),
    dest_fileName: '<%= pkg.name %>-<%= pkg.version %>.min',

    //The banner is the comment that is placed at the top of compiled source files
    meta: {
      banner: 
        '/**\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' */\n'
    },

    // remove old build folder contents
    clean: [ 
      'build', 
    ],

    // compile main.less file to css
    less: {
      build: {
        options: {
          paths: ["css"],
          sourceMap: true,
          relativeUrls: true,
          sourceMapRootpath: "../.."
        },
        files: {
          "assets/main.css": "less/main.less"
        }
      },
      compile: {
        options: {
          paths: ["css"],
          compress: true,
          cleancss: true,
          optimisation: 2
        },
        files: {
          "assets/<%= dest_fileName %>.css": "less/main.less"
        }
      }
    },

    // check js files for errors
    jshint: {
      src: [
        'src/app.js', 'src/**/*.js'
      ],
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true
      }
    },

    // add textual notation for dependency incjetion to every controller, directive and service
    ngmin: {
      compile: {
        files: [{
          cwd: 'src',
          src: ['**/*.js', '!_template/*.js'],
          dest: 'build',
          expand: true
        }]
      }
    },

    // concatenates multiple source files into a single file.
    concat: {
      // js source files
      compile_js: {
        src: ['<%= lib_files %>','<%= build_files %>'],
        dest: 'build/<%= dest_fileName %>.js'
      }
    },

    // Minify the sources!
    uglify: {
      compile: {

        options: {
          //mangle: false,
          //beautify: true,
          banner: '<%= meta.banner %>'
        },
        files: {
          'assets/<%= dest_fileName %>.js': 'build/<%= dest_fileName %>.js'
        }
      }
    },

    index: {
      build: {
        lib_files: '<%= lib_files %>',
        app_files: '<%= app_files %>'
      },
      compile: {}
    },

    // Karma configurations
    karma: {
      options: {
        configFile: 'build/karma-unit.js'
      },
      unit: {
        runnerPort: 9101,
        background: true
      },
      continuous: {
        singleRun: true
      }
    },

    grunticon: {
      run: {
        files: [{
          expand: true,
          cwd: 'img/svgs',
          src: ['*.svg', '*.png'],
          dest: "."
        }],
        options: {

          // optional grunticon config properties
          // SVGO compression, false is the default, true will make it so
          svgo: true,

          // PNG compression, false is the default, true will make it so
          pngcrush: false,

          // CSS filenames
          datasvgcss: "assets/icons.svg.css",
          datapngcss: "assets/icons.png.css",
          urlpngcss: "assets/icons.fallback.css",

          // folder name (within dest) for png output
          pngfolder: "img/icons",

          // prefix for CSS classnames
          cssprefix: ".icon-",

          defaultWidth: "32px",
          defaultHeight: "32px",

          // define vars that can be used in filenames if desirable, like foo.colors-primary-secondary.svg
          /*colors: {
            primary: "red",
            secondary: "#666"
          },*/

          // css file path prefix - this defaults to "/" and will be placed before the "dest" path when stylesheets are loaded.
          // This allows root-relative referencing of the CSS. If you don't want a prefix path, set to to ""
          cssbasepath: "../img/icons"

        }
      }
    },

    // watch for file changes
    watch: {
      less: {
        options: {
          livereload: true
        },
        files: ["less/**/*.less", "src/**/*.less"],
        tasks: ["less:build"]
      },
      index: {
        files: ['index.tpl.html'],
        options: {
          livereload: true,
        },
        tasks: ['index:build']
      },
      html: {
        files: ['src/**/*.html' ],
        options: {
          livereload: true,
        }
      },
      js: {
        files: ['src/**/*.js'],
        options: {
          livereload: true,
        },
        tasks: ["jshint"]
      },
    }

  });

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-grunticon');

  // Default task(s).
  grunt.registerTask('default', ['index:build','watch']);
  grunt.registerTask('icons', ['grunticon:run']);
  grunt.registerTask('test', ['index:build', 'karma:continuous', 'karma:unit', 'watch']);
  grunt.registerTask('dist', ['clean', 'less:compile', 'jshint', 'ngmin', 'concat:compile_js', 'uglify', 'index:compile']);

  /** 
   * The index.html template includes the stylesheet and javascript sources
   * based on dynamic names calculated in this Gruntfile. This task assembles
   * the list into variables for the template to use and then runs the
   * compilation.
   */
  grunt.registerMultiTask('index', 'Process index.tpl.html template', function() {
    if (this.target === 'build') {
      var lib_scripts = this.data.lib_files;
      var app_scripts = this.data.app_files;
      var all_scripts = lib_scripts.concat(app_scripts);  // merge third party libraries with app modules
      
      // copy compiled index template
      grunt.file.copy('index.tpl.html', 'index.html', {
        process: function(contents, path) {
          return grunt.template.process(contents, {
            data: {
              target: 'build',
              version: grunt.config('pkg.version'),
              css: 'main.css',
              scripts: all_scripts
            }
          });
        }
      });

      // copy compiled karma template
      grunt.file.copy( 'karma-unit.tpl.js', 'build/karma-unit.js', { 
        process: function ( contents, path ) {
          return grunt.template.process( contents, {
            data: {
              scripts: lib_scripts
            }
          });
        }
      });

    }
    if (this.target === 'compile'){

      // copy compiled index template
      grunt.file.copy('index.tpl.html', 'index.html', {
        process: function(contents, path) {
          return grunt.template.process(contents, {
            data: {
              target: 'compile',
              version: grunt.config('pkg.version'),
              css: grunt.config('dest_fileName') + '.css',
              scripts: [
                'assets/' + grunt.config('dest_fileName') + '.js' // compiled js file
              ]
            }
          });
        }
      });
    }
    grunt.log.writeln('index.html...created OK');
  });

};