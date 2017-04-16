'use babel';

// Include in package-deps in package.json
// "editorconfig",

// https://discuss.atom.io/t/is-there-a-method-to-import-export-settings/10616
// https://discuss.atom.io/t/how-to-backup-all-your-settings/15674
// http://flight-manual.atom.io/behind-atom/sections/configuration-api/
// https://atom.io/docs/api/v1.9.3/Config
// https://github.com/atom-community/sync-settings/blob/master/lib/sync-settings.coffee
// https://github.com/blog/2231-building-your-first-atom-plugin
// https://www.sitepoint.com/write-atom-packages-using-vanilla-javascript/
// https://hackernoon.com/making-atom-even-more-awesome-my-setup-e7a89969a876
// https://atom.io/packages/seti-ui
// https://atom.io/packages/monokai-seti

// Module imports.
import { CompositeDisposable } from 'atom'


// Relative Imports.
import ReReReReactView from './re-re-re-react-view'
import packageConfig from '../config/re-re-re-react.json';
import { installReReReReact, setConfigs } from './activate';
import { commands } from './commands';

// Main class.
export default {
  config: packageConfig,
  reReReReactView: null,
  modalPanel: null,
  subscriptions: null,

  activate (state) {
    // Install package if needed.
    installReReReReact()
    setConfigs()
    subscribeCommands()
  },

  // deactivate() {
  //   this.modalPanel.destroy();
  //   this.subscriptions.dispose();
  //   this.reReReReactView.destroy();
  // },

  serialize() {
    // return {
    //   reReReReactViewState: this.reReReReactView.serialize()
    // };
  },
}
