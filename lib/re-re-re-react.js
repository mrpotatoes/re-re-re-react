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
import ReReReReactView from './re-re-re-react-view'
import { CompositeDisposable } from 'atom'
import packageConfig from './config-schema.json';

const installReReReReact = () => {
  // replace the example argument 'linter-ruby' with the name of this Atom package
  require('atom-package-deps').install('re-re-re-react')
    .then(function() {
      console.log('All dependencies installed, good to go')
    })
}

export default {
  config: packageConfig,
  reReReReactView: null,
  modalPanel: null,
  subscriptions: null,

  activate (state) {
    // Install package if needed.
    installReReReReact()

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      're-re-re-react:get-configs': () => this.getConfigs()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.reReReReactView.destroy();
  },

  serialize() {
    // return {
    //   reReReReactViewState: this.reReReReactView.serialize()
    // };
  },

  getConfigs() {
    delete atom.config.settings['exception-reporting']
    
    console.log(atom.config.defaultSettings)
    
    console.log('User selected settings', atom.config.settings)

    // atom.config.set('yourPackage.activateHyperMode', true)

    // let editor
    // if (editor = atom.workspace.getActiveTextEditor()) {
    //   let selection = editor.getSelectedText()
    //   selection = selection.split('').reverse().join('')
    //   editor.insertText(selection)
    // }
  }
}
