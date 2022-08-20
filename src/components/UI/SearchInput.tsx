import { SearchOutlined } from '@ant-design/icons'

const SearchInput = () => {
  return (
    <form>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
      >
        Search
      </label>
      <div className='relative'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <SearchOutlined className='text-xl' />
        </div>
        <input
          type='search'
          id='default-search'
          className='block p-3 pl-10 w-[350px] outline-none font-semibold text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   '
          placeholder='Search Topics...'
          required
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-[5px] bg-yellow-500 hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-500 transition-all ease-in-out duration-300 font-semibold rounded-lg text-sm px-4 py-2'
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchInput
