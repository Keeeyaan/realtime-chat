const ChatBox = () => {
  return (
    <>
      <div className='w-[900px] p-4 h-[550px] rounded-t bg-slate-900 shadow-lg'>
        <div className=' p-2 rounded bg-slate-600'>
          <div className='flex items-center gap-4'>
            <div className='h-[40px] w-[40px] bg-slate-300 rounded-[50%]' />
            <h1 className='text-white'>
              Hi guysHi guysHi guysHi guysHi guysHiHi guysHi guys guys!
            </h1>
          </div>
        </div>
      </div>
      <form className='flex'>
        <textarea
          placeholder='Type something here...'
          className='h-[70px] w-full resize-none rounded-bl outline-none p-4'
        />
        <button
          type='button'
          className='bg-blue-500 shadow-lg text-white text-sm w-[150px] py-2 px-4 rounded-br transition-all ease-in-out duration-300 font-semibold outline-none'
        >
          Send
        </button>
      </form>
    </>
  )
}

export default ChatBox
