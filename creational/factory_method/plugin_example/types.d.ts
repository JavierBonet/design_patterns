interface PluginCreator {
  createPlugin: () => ProgramPlugin;
}

interface ProgramPlugin {
  doSomething: () => void;
}
