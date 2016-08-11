module.exports = function(config) {

	var configuration = {

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '../',

		urlRoot: '/__testacular/',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],

		webpack: {
			devtool: 'inline-source-map',
			debug: true,
			module: {
				loaders: [
					{
						test: /\.jsx$/,
						loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2',
						exclude: /node_modules/,
					},
					{
						test: /\.js$/,
						loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2',
						exclude: /node_modules/,
					},
					{
						test: /\.json$/,
						loader: 'json',
					},
				],
			},
			node: {
				// fixes Joi
				net: "empty",
				// fixes Joi
				dns: "empty",
			},

			// http://airbnb.io/enzyme/docs/guides/webpack.html
			externals: {
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true,
			},
		},


		// list of files / patterns to load in the browser
		files: [
			{ pattern: 'test/index.js', watched: false },
		],

		// list of files to exclude
		exclude: [
			'lib/**',
			'node_modules/',
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'test/**/*.js': ['webpack', 'sourcemap'],
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_DEBUG,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		browserNoActivityTimeout: 60000,

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// travis
		customLaunchers: {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox'],
			},
		},

	};

	if (process.env.TRAVIS) {
		configuration.browsers = ['Chrome_travis_ci'];
		configuration.singleRun = true;
	}
	config.set(configuration);
};
