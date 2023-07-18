import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

const Routers = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/game'} element={<Game />}></Route>
    </Routes>
  );
};

export default Routers;
