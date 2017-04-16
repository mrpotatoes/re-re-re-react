'use babel'

import fs from 'fs'
const merge = require('deepmerge')

// On activate we'll go ahead and take the package's settings and merge in the
// user's selected preferance overrides and use that instead of constantly using
// the package's settings. This way if the user changes a setting in a module
// that we expect to have brought in then we'll make sure it uses theirs and not
// ours. That would be overly dickish and quite honestly simply annoying.

// import paths from './paths'

const installReReReReact = () => {
  // @TODO: Make sure to re-enable this (uncomment) so it works. 
  // require('atom-package-deps').install('re-re-re-react')
  //   .then(function() {
  //     console.log('All dependencies installed, good to go')
  //   })
}

const setConfigs = () => {
	const atomPackagePath = atom.packages.getPackageDirPaths()
	const packagePath = `${atomPackagePath}/re-re-re-react`
	const optionsPath = `${packagePath}/config`

	// User Selected defaults
  delete atom.config.settings['exception-reporting']

  // Some simple manipulations.
  const defaultSettingsPath = `${optionsPath}/package-deps-defaults.json`
  const settingsContents = fs.readFileSync(defaultSettingsPath).toString()
	const defaultSettings = JSON.parse(settingsContents)
	const packages = Object.keys(defaultSettings)
	const userSettings = atom.config.settings

	// Merge the two and prefer userSettings.
	const mergedSettings = merge(defaultSettings, userSettings)

	// Iterate through all the packages and apply their individual settings.
	packages.forEach(function(packageName) {
    Object.keys(mergedSettings[packageName]).forEach(function(packageSetting) {
	    const settingKey = `${packageName}.${packageSetting}`
	    const settingValue = mergedSettings[packageName][packageSetting]

	    atom.config.set(settingKey, settingValue)
		})
	})
}

export default {
	installReReReReact,
	setConfigs,
}