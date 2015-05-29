module.exports = function(grunt){
    grunt.initConfig({
        pkj:grunt.file.readJSON('package.json'),
        jshint:{
            foo:{
                src:
                    ['js/Models/*.js']
            },

            options:{
                reporter: require('jshint-stylish')
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
