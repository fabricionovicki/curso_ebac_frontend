module.exports = function (grunt) {
    grunt.initConfig({
    // Compilação do LESS
        less: {
            build: {
                files: {
                    'dist/css/style.css': 'src/less/style.less'
                }
            }
        },

    // Minificação do CSS gerado
        cssmin: {
            build: {
                files: {
                    'dist/css/style.min.css': 'dist/css/style.css'
                }
            }
        },

    // Minificação do JavaScript
        uglify: {
            build: {
                files: {
                    'dist/js/main.min.js': ['src/js/main.js']
                }
            }
        }
    });

    // Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefa padrão
    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
};  