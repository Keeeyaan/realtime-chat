import { Link } from 'react-router-dom';
import { MenuOutlined, SettingFilled } from '@ant-design/icons';

import { useUserContext } from '../context/UserProvider';
import Button from './UI/Button';
import SearchInput from './UI/SearchInput';

const Header = () => {
  const { username } = useUserContext();

  return (
    <>
      <header className='container py-4 h-auto flex justify-between items-center px-6 sm:px-0 sm:mx-auto'>
        <div className='flex items-center gap-6'>
          <Link to='/' className='text-xl font-bold text-white'>
            <span className='text-yellow-500'>/</span>Chatty
          </Link>
          <Link to='/create-room'>
            <Button className='hidden sm:block bg-green-500 hover:bg-green-600'>New room</Button>
          </Link>
        </div>
        <SearchInput />
        <div className='hidden sm:flex items-center gap-6'>
          {username && (
            <div className='flex items-center'>
              <div className='h-[40px] w-[40px] bg-blue-600 rounded-[50%] mr-2' />
              <h1 className='text-white font-bold'>{username}</h1>
            </div>
          )}
          <SettingFilled className='cursor-pointer text-white' />
        </div>
        <MenuOutlined className='text-lg text-white sm:hidden' />
      </header>
    </>
  );
};

export default Header;
