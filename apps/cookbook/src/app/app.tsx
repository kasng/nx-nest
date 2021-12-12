import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';
import Header from './components/Header';
import { useLocation } from 'react-router-dom';

export function App() {
  const location = useLocation();
  return (
    <div className="">
      <Header activePath={location.pathname} />
    </div>
  );
}

export default App;
