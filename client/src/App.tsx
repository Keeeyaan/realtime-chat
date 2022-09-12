import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Room from './pages/Room';
import CreateRoom from './pages/CreateRoom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<Room />} />
        <Route path='/create-room' element={<CreateRoom />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
