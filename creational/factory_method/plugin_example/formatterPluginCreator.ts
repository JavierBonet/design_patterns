import FormatterPlugin from './formatterPlugin';

class FormatterPluginCreator implements PluginCreator {
  createPlugin() {
    return new FormatterPlugin();
  }
}

export default FormatterPluginCreator;
