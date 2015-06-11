module.exports = function(grunt){
    grunt.initConfig({
        pkj:grunt.file.readJSON('package.json'),
        serve:{
          options:{
              port: 8080
          }
        },
        connect:{
          server:{
              options:{
                  port: 8080,
                  base: {
                      path: '/src',
                      options: {
                          index: 'index.html',
                          maxAge: 300000
                      }
                  }
              }
          }
        },
        jst: {
            compile: {
                files: {
                    "src/js/Module1/Templates/templates.js": ["src/js/Module1/Views/*.html"]
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
    //grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks("grunt-serve");
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.registerTask('default', ['jshint']);
};
