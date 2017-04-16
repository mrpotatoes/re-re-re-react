'use babel'

import { CompositeDisposable } from 'atom'

export default {
	subscribeCommands: () => {
		// Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
		// this.subscriptions = new CompositeDisposable();

  //   this.subscriptions.add(atom.commands.add('atom-workspace', {
  //     're-re-re-react:print-default-settings': () => printUserSettings()
  //   }));

  //   this.subscriptions.add(atom.commands.add('atom-workspace', {
  //     're-re-re-react:print-user-settings': () => printDefaultSettings()
  //   }));
	}
}