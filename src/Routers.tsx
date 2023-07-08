import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import App from './pages/App';

const Routers = () => {
  return (
    <Routes>
      <Route path={'/'} element={<App />}></Route>
      <Route path={'/game'} element={<Game />}></Route>
    </Routes>
  );
};

export default Routers;
