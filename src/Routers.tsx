import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import ErrorPage from './pages/ErrorPage';

const Routers = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/game'} element={<Game />}></Route>
      <Route path={'/*'} element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Routers;
