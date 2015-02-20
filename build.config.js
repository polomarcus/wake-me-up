/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  compile_dir: 'bin',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [
    'vendor/angular-utils-pagination/dirPagination.tpl.html',
    'src/app/**/*.tpl.html'
    ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`vendor/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      'vendor/angular/angular.min.js',
      'vendor/angular-cookies/angular-cookies.min.js',
      'vendor/angular-sanitize/angular-sanitize.min.js',
      'vendor/jquery/dist/jquery.min.js',
      'vendor/angular-timer/dist/angular-timer.js',
      'vendor/angular-translate/angular-translate.min.js',
      'vendor/firebase/firebase.js',
      'vendor/angularfire/dist/angularfire.min.js',
      'vendor/moment/min/moment.min.js',
      'vendor/humanize-duration/humanize-duration.js',
      'vendor/lodash/lodash.min.js',
      'vendor/moment/locale/fr.js',
      'vendor/moment/locale/en-gb.js',
      'vendor/moment/locale/es.js',
      'vendor/moment/locale/it.js',
      'vendor/moment/locale/ru.js',
      'vendor/moment/locale/uk.js',
      'vendor/moment/locale/de.js',
      'vendor/moment/locale/pt.js',
      'vendor/angular-moment/angular-moment.min.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'vendor/placeholders/angular-placeholders-0.0.1-SNAPSHOT.min.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/modules/route/route.js',
      'vendor/soundcloud/sdk.js',
      'vendor/angular-utils-pagination/dirPagination.js',
      'vendor/bootstrap/js/collapse.js',
      'assets/js/googleplus.js',
      'assets/js/googleTrack.js',
      'assets/js/advertisement.js'
    ],
    css: [
      //'vendor/font-awesome/css/font-awesome.min.css', //@TODO
      'vendor/bootstrap/dist/css/bootstrap.min.css'
    ],
    assets: [
    ]
  }
};
