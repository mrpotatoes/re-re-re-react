# re-re-re-react package

A silly name for a package that sets up your Atom editor to be a React powerhouse.

In order to do this I use the `atom-package-deps` module from npm to download and install many important packages. If found on the system already then no biggie otherwise I'll take up some of your time installing this on first install. I do not uninstall these packages incase you like these.

There are also a few planned features that I would like to implement when I gather the time to do so. They are listed below.

## Warning:
This package kind of takes over your ATOM install so be warned. You may also want to restart your atom to be "safe".

## TODO
While I look for a new job I'm going to keep this repo silent. I do have some features that I do want to add, tho.

- [ ] Typescript/Flow support.
- [ ] Fix diff/patch issues.
- [ ] Remove Emmet package (doesn't provide as much value as I would like.
- [ ] Create an NPM runner panel
    - [ ] Ability to run any NPM script by just a click (finds your package.json)
    - [ ] Parks itself on the right side
    - [ ] Add a console so that you can `--watch` your tests as you mutate the codebase.
- [ ] Possibly bring in `js-hyperclick` to work more efficantly esp with namespaces (Webpack, Babel plugins)
- [ ] Find a decent debugger and integrate it into this package ([Wallaby.js](https://wallabyjs.com/)? [XAtom Debug](https://atom.io/packages/xatom-debug)?)
- [ ] Redux/React file generator
    * I'm on the fence about this one but I think it would be useful.
    - [ ] Be able to save a cache of Redux forumlas so that clicking to and from them is easier.
 
