import React from 'react';

// Redux
import { Provider } from 'react-redux';
// Redux Store
import { store } from './store';

// React Router Dom
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// CSS
import './styles.css';

// Componentes React
import { JournalApp } from './JournalApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
