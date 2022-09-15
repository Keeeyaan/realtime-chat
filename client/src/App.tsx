import { Routes, Route } from 'react-router-dom';

import { useUserContext } from './context/UserProvider';
import Footer from './components/Footer';
import Home from './pages/Home';
import Room from './pages/Room';
import CreateRoom from './pages/CreateRoom';
import NicknameOverlay from './components/NicknameOverlay';

const App = () => {
  const { showNicknameModal } = useUserContext();

  return (
    <>
      {!showNicknameModal && <NicknameOverlay />}
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
