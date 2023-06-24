import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '~/App';

import './styles/main.scss';

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container);
  const app = (
    //<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    //</React.StrictMode>
  );

  root.render(app);
}
