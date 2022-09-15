import { useState } from 'react';

import { useUserContext } from '../context/UserProvider';
import Modal from './UI/Modal';
import Button from './UI/Button';

const NicknameOverlay = () => {
  const [nickname, setNickname] = useState('');

  const { username, setShowNicknameModal, setUsername } = useUserContext();

  const showModalClickHandler = () => {
    setShowNicknameModal(true);
  };

  const usernameChangeHandler = (e: any) => {
    setNickname(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    setUsername(nickname);
    setShowNicknameModal(true);
    console.log(username);
  };

  return (
    <Modal showModalClickHandler={showModalClickHandler}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='room-name' className='text-muted mb-1'>
            <h1>Who are you?</h1>
          </label>
          <input
            onChange={usernameChangeHandler}
            id='room-name'
            name='username'
            className='form-control'
            type='text'
            placeholder='Nickname'
            autoComplete='off'
          />
        </div>
        <Button type='submit' className='bg-green-500'>
          Continue
        </Button>
      </form>
    </Modal>
  );
};

export default NicknameOverlay;
