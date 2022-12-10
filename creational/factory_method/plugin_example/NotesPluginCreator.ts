import NotesPlugin from './NotesPlugin';

class NotesPluginCreator implements PluginCreator {
  createPlugin() {
    return new NotesPlugin();
  }
}

export default NotesPluginCreator;
