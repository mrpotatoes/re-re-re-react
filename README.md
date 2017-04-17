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

### Links/Packages to give a try
* https://atom.io/packages/git-plus
* https://atom.io/packages/git-time-machine
* https://atom.io/packages/merge-conflicts
* https://atom.io/packages/atom-css-comb
* https://atom.io/packages/css-declaration-sorter
* https://atom.io/packages/duplicate-line-or-selection
* https://atom.io/packages/imdone-atom
* https://atom.io/packages/project-plus
* https://atom.io/themes/monokai-seti
* https://atom.io/themes/seti-ui
* https://atom.io/packages/simple-drag-drop-text
* https://atom.io/packages/autocomplete-modules
* https://atom.io/packages/script
* https://github.com/peterdotjs/atom-synced-sidebar
* https://github.com/smonami/hacker-news-side-panel
	* For how to make a simple side panel
* https://github.com/aidistan/atom-symbols-view-plus
* https://github.com/0tho/atom-nav-panel-plus
* https://github.com/suda/tool-bar
	* A great way to add custom toolbar stuff & plugins for my thinger.
* https://github.com/05tb/tool-bar-basic
* https://github.com/AlexNewson/tool-bar-basic
* https://atom.io/packages/vital-tool-bar
* https://atom.io/packages/tool-bar-besser
* https://atom.io/packages/tool-bar-config
* https://atom.io/packages/tool-bar-main
* https://atom.io/packages/tool-bar-almighty
* https://atom.io/packages/tool-bar-atom
* https://github.com/iotontech/ioton-atom
* https://github.com/VictorBjelkholm/atom-react-preview
* https://atom.io/packages/draw-package
* https://github.com/bhargav175/clickable-npm-scripts
* https://github.com/ericadamski/atom-package-script-runner
* https://github.com/jussi-kalliokoski/atom-npm-plus
	* Abstract status panel to use elsewhere (in my code?)
* https://atom.io/packages/vagrant
	* Fork so that it checks for Vagrant file locally in project.
	* Perhaps use the status panel from atom-npm-plus
	* Add SSH (open new terminal window?)
* https://github.com/b-connect/atom-vagrant-manager
* https://github.com/francoislaberge/atom-diagrams
* https://github.com/pusher/atom-pair
