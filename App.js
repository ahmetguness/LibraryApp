import { StatusBar } from 'expo-status-bar';
import Navigators from './src/navigators/Navigators';

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Navigators/>
    </>
  );
}
