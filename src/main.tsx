import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from '~/App';

import './styles/main.scss';

const container = document.querySelector('#root');

if (container) {
  const root = createRoot(container);
  const app = //<React.StrictMode>
    (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  //</React.StrictMode>

  root.render(app);
}
