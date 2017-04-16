export default {
	packagePath: () => {
		const atomPackagePath = atom.packages.getPackageDirPaths()
		const packagePath = `${atomPackagePath}/re-re-re-react`

		return packagePath
	},

	configPath: () => {
		const atomPackagePath = atom.packages.getPackageDirPaths()
		const packagePath = `${atomPackagePath}/re-re-re-react`
		const optionsPath = `${packagePath}/config/package-defaults`

		return optionsPath
	}
}
