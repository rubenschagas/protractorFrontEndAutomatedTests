const cucumberOptsTags = [];
cucumberOptsTags.push("not @bug and not @ignore and not @fixme and not @entity-exclusion");
cucumberOptsTags.push(process.env.CUCUMBER_TAG);
// cucumberOptsTags.push("@fast");
// cucumberOptsTags.push("@medium");
// cucumberOptsTags.push("@slow");

const url = '.tmp/' + process.env.E2E_REPORT_FOLDER;

const cucumberOptsTagsMap = new Map();
cucumberOptsTagsMap.set("allBut", "not @someFeature and not @anotherFeature");

process.stdout.write(`Cucumber tags: ${cucumberOptsTags} \n\n`);

exports.config = {
    directConnect: true,
    getPagetimeout: 9000000,
    allScriptsTimeout: 10800000,
    restartBrowserBetweenTests: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: 'e2e/features/*/*.feature',
    ignoreUncaughtExceptions: true,
    // reference: https://www.protractortest.org/#/frameworks
    cucumberOpts: {
        tags: cucumberOptsTags,
        format: 'json:.tmp/' + process.env.E2E_REPORT_FOLDER + '/results.json',
        require: [
            'e2e/scripts/*/*.js',
            'timeout.js'
        ],

        // How know which steps are not running?
        // https://github.com/cucumber/cucumber-js/issues/1107#issuecomment-419321922
        // 'dry-run': true,
        // format: 'usage:.tmp/usage.txt',
        // format: 'usage-json:.tmp/usage.json',
        // plugin: 'pretty',

    },

    suites: {
        allfeatures: 'e2e/features/*.feature'
    },

    capabilities: {
        // TRUE = MULTITHREADS
        shardTestFiles: true,
        // PARALELISM
        maxInstances: process.env.CONFIG_CAPABILITIES_MAX_INSTANCES !== undefined ? process.env.CONFIG_CAPABILITIES_MAX_INSTANCES : 3,
        //................................
        browserName: 'chrome',
        "seleniumProtocol": "WebDriver",
        chromeOptions: {
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': url,
                }
            }
        },
        metadata: {
            device: 'local',
            platform: {
                name: 'SO',
                version: 'X'
            }
        }
    }
};
