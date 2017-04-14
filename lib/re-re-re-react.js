'use babel';

import ReReReReactView from './re-re-re-react-view';
import { CompositeDisposable } from 'atom';

export default {

  reReReReactView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.reReReReactView = new ReReReReactView(state.reReReReactViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.reReReReactView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      're-re-re-react:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.reReReReactView.destroy();
  },

  serialize() {
    return {
      reReReReactViewState: this.reReReReactView.serialize()
    };
  },

  toggle() {
    console.log('ReReReReact was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
