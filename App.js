
import MainNavigator from './navigation';
import { Provider as ReduxProvider } from 'react-redux'
import store from './store';
export default function App() {
  return (
    <ReduxProvider store={store}>
      <MainNavigator />
    </ReduxProvider>
  );
}


