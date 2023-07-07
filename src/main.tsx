import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '@fontsource/exo-2';

import { App } from '~/App';
import { store } from '~/store/store';
import '~/styles/main.scss';

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container);
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  root.render(app);
}
