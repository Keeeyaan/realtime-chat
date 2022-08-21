import { MenuOutlined } from '@ant-design/icons'

import Button from './UI/Button'
import SearchInput from './UI/SearchInput'

const Header = () => {
  return (
    <>
      <header className='container py-4 h-auto flex justify-between items-center px-6 sm:px-0 sm:mx-auto'>
        <div className='flex items-center gap-6'>
          <h1 className='text-xl font-bold text-white'>
            <span className='text-yellow-500'>/</span>Chatty
          </h1>
          <Button className='hidden sm:block bg-green-500 hover:bg-green-600'>New chat</Button>
        </div>
        <div className='hidden sm:block'>
          <SearchInput />
        </div>
        <MenuOutlined className='text-lg text-white sm:hidden' />
      </header>
    </>
  )
}

export default Header
