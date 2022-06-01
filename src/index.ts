import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the test_btn extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'test_btn:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension test_btn is activated!');
  }
};

export default plugin;
