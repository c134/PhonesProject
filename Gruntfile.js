module.exports = function(grunt){
    grunt.initConfig({
        pkj:grunt.file.readJSON('package.json'),
        serve:{
          options:{
              port: 8080
          }
        },
        connect:{
              target: {
                  options: {
                      port: 8080,
                      open: true,
                      keepalive: true,
                      base: ['src/'],
                      middleware: function(connect, options){
                        var middlewares;
                          middlewares = [];
                          middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
                          options.base.forEach(function(base) {
                              return middlewares.push(connect["static"](base));
                          });
                          return middlewares;
                      }
                  }
              }
        },
        jshint: {
                options: {
                    jshintrc: '.jshintrc.json',
                    reporter: require('jshint-stylish')
                },
            all: {
                src: ['src/js/Module1/Models/*.js', 'src/js/Module1/Views/*.js', 'src/js/Module1/Controllers/*.js']
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    modRewrite = require('connect-modrewrite');
    grunt.loadNpmTasks("grunt-serve");
    grunt.registerTask('default', ['jshint']);
};
