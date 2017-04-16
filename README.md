# re-re-re-react package

A silly name for a package that sets up your Atom editor to be a React powerhouse.

In order to do this I use the `atom-package-deps` module from npm to download and install many important packages. If found on the system already then no biggie otherwise I'll take up some of your time installing this on first install. I do not uninstall these packages incase you like these.

There are also a few planned features that I would like to implement when I gather the time to do so. They are listed below.

## Warning:
This package kind of takes over your ATOM install so be warned. You may also want to restart your atom to be "safe". 

## Features
### Snippets
### Commands
### Shortcuts

# TODO
- [ ] Split up the files
- [ ] Do what is in install.js
- [ ] Let's figure out our directories.
- [ ] Get my custom keymaps to work.
- [ ] Get my custom snippets to work.
- [ ] Get my custom menus to work.
- [ ] Get my custom contextual menus to work.
- [ ] Would I be able to get Nuclide functionality in here?
- [ ] Nuclide's "Working Sets" functionality (https://atom.io/packages/search?q=working+set).
- [ ] Nuclide's debugger support.
- [ ] Make autocomplete + hyperclick work correctly.
- [ ] Figure out how to get a pan on the right working.
	- Put in a debugger & terminal
- [ ] Possibly multi-windows?
- [ ] https://nuclide.io/docs/platforms/react-native/
- [ ] Specs?
- [ ] Ignore all core settings.

# Planned Functionality
- [ ] A custom webpack loader to do auto class finding (or something to the effect. Still an idea in my head nothing planned out).
- [ ] Better git support for single files, diff et al.
- [ ] Better autocomplete functionality. Either use Tern or my own custom rolled solution.
- [ ] An NPM helper (run npm scripts from package.json easily)
- [ ] A vagrant helper (If `Vagrantfile` exists then be able to do it's commands).
- [ ] Task Runner.
- [ ] Current file Symbols navigator.

## Packages to look into
* https://github.com/kiddkai/atom-node-debugger
* https://github.com/AtomDebugger/debugger
* https://nuclide.io/docs/features/debugger/
* https://medium.com/javascript-scene/must-see-javascript-dev-tools-that-put-other-dev-tools-to-shame-aca6d3e3d925