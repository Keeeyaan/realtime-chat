import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

import Button from './UI/Button';
import SearchInput from './UI/SearchInput';

const Header = () => {
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
        <div className='hidden sm:block'>
          <SearchInput />
        </div>
        <MenuOutlined className='text-lg text-white sm:hidden' />
      </header>
    </>
  );
};

export default Header;
