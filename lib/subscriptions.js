import { CompositeDisposable } from 'atom'

this.subscriptions = new CompositeDisposable();

this.subscriptions.add(atom.commands.add('atom-workspace', {
  're-re-re-react:get-configs': () => this.getConfigs()
}));