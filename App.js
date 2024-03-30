import { StatusBar } from 'expo-status-bar';
import Navigators from './src/navigators/Navigators';
import { Provider } from 'react-redux';
import store from './src/redux/Store';

export default function App() {
  return (
    <>
      <Provider store={store} >
      <StatusBar hidden={true} />
      <Navigators/>
      </Provider>
    </>
  );
}
