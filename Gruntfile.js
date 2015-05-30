module.exports = function(grunt){
    grunt.initConfig({
        pkj:grunt.file.readJSON('package.json'),
        jshint: {
                options: {
                    jshintrc: '.jshintrc.json',
                    reporter: require('jshint-stylish')
                },
            all: {
                src: ['src/js/Models/*.js', 'src/js/Views/*.js', 'src/js/Controllers/*.js']
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
