```js
const atomPackagePath = atom.packages.getPackageDirPaths()
const packagePath = `${atomPackagePath}/re-re-re-react`
const optionsPath = `${packagePath}/config/package-defaults`
const fileContents = {}

const fs = require('fs')

const files = fs.readdirSync(optionsPath).forEach(file => {
   const config = fs.readFileSync(`${optionsPath}/${file}`).toString()
   console.log(`${optionsPath}/${file}`);
   // fileContents
 });
```

```js
editor = atom.workspace.getActiveTextEditor()
```