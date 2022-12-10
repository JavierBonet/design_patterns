import IconPlugin from './IconPlugin';

class IconPluginCreator implements PluginCreator {
  createPlugin() {
    return new IconPlugin();
  }
}

export default IconPluginCreator;
