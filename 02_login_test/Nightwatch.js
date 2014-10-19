module.exports = {
  src_folders: ['./tests'],
  output_folder: './results',
  live_output: true,

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server/lib/runner/selenium-server-standalone-2.38.0.jar',
    log_path: './results',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver'
    }
  },

  test_settings: {
    default: {
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: './results/screenshots'
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      globals: require('./data/dev')
    },

    staging: {
      globals: require('./data/staging')
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    },

    phantom: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        javascriptEnabled: true
      }
    }
  }
};
