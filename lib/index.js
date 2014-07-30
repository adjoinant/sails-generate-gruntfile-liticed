/**
 * sails-generate-gruntfile
 *
 * Usage:
 * `sails generate gruntfile`
 *
 * @type {Object}
 */
module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {

		'./Gruntfile.iced.md': { template: './Gruntfile.iced.md' },

		// Tasks folder, subfolders, and README.
		'./tasks': { folder: {} },
		'./tasks/config': { folder: {} },
		'./tasks/register': { folder: {} },
		'./tasks/README.md': { template: './tasks/README.md' }
	}
};

