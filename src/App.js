import Router from './Router/Router';
import {Provider} from './Context'
import Modal from './components/Modal/Modal'

function App() {
  return (
    <div className='app'>
      <Provider>
          <Modal />
         <Router />
      </Provider>
    </div>
  );
}

export default App;
