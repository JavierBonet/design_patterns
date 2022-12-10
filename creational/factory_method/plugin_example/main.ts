import FormatterPluginCreator from './formatterPluginCreator';
import IconPluginCreator from './IconPluginCreator';
import NotesPluginCreator from './NotesPluginCreator';

function main() {
  const plugins: ProgramPlugin[] = [];
  const iconPluginCreator: PluginCreator = new IconPluginCreator();
  const formatterPluginCreator: PluginCreator = new FormatterPluginCreator();
  const notesPluginCreator: PluginCreator = new NotesPluginCreator();

  plugins.push(iconPluginCreator.createPlugin());
  plugins.push(formatterPluginCreator.createPlugin());
  plugins.push(notesPluginCreator.createPlugin());

  plugins.forEach((plugin) => plugin.doSomething());
}

main();
