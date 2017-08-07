# re-re-re-react package

A silly name for a package that sets up your Atom editor to be a React powerhouse.

In order to do this I use the `atom-package-deps` module from npm to download and install many important packages. If found on the system already then no biggie otherwise I'll take up some of your time installing this on first install. I do not uninstall these packages incase you like these.

There are also a few planned features that I would like to implement when I gather the time to do so. They are listed below.

## Warning:
This package kind of takes over your ATOM install so be warned. You may also want to restart your atom to be "safe".

## TODO
While I look for a new job I'm going to keep this repo silent. I do have some features that I do want to add, tho.

- [ ] Add keyboard config and snippets support
      * Example: https://github.com/yeojz/atom-react-snippets
- [ ] Fix shortcuts
- [ ] Typescript/Flow support.
- [ ] Fix diff/patch issues.
    * Learned, recently, that this isn't working. Need to fix.
- [ ] Remove Emmet package (doesn't provide as much value as I would like.
- [ ] Create a function list panel for JavaScript
    - [ ] Would use Babel to read file and get/list all the methods, classes and properties in a panel that can be docked.
    * Note to self: Learn how to use Babel.
- [ ] Create an `npm` runner panel
    - [ ] Ability to run any `npm` script by just a click (finds your package.json)
    - [ ] Parks itself on the right side
    - [ ] Add a console so that you can `--watch` your tests as you mutate the codebase.
    - [ ] All `npm` commands should be available (install, 
    - [ ] Allow for triggers/hooks so that you can run specific scripts on defined events (ie: file delete, `git checkout`)
    - [ ] Allow for default triggers on startup or codebase change (ie: `git pull`) so you're always up to date with the latest packages.
    * Would adding `eslint` functionality be a good idea?
- [ ] Possibly bring in `js-hyperclick` to work more efficantly esp with namespaces (Webpack, Babel plugins)
- [ ] Find a decent debugger and integrate it into this package ([Wallaby.js](https://wallabyjs.com/)? [XAtom Debug](https://atom.io/packages/xatom-debug)?)
- [ ] Redux/React file generator
    * I'm on the fence about this one but I think it would be useful.
    - [ ] Be able to save a cache of Redux forumlas so that clicking to and from them is easier.
 
