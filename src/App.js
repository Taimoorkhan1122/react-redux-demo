import CakeCount from './components/CakeCount';
import { Provider } from 'react-redux';
import store from './store/cake/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <CakeCount/>
    </div>
    </Provider>
  );
}

export default App;
