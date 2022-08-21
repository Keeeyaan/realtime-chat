import Button from './Button'

type ChatRoomCardProps = {
  title: string
  description: string
  topics: {
    title: string
  }[]
  online: number
}

const ChatRoomCard = ({ title, description, topics, online }: ChatRoomCardProps) => {
  return (
    <div className='transform transition-all duration-200 hover:-translate-y-1 min-h-[200px] p-3 w-[210px] shadow-md bg-white rounded'>
      <div className='mb-2 flex justify-end items-center gap-2'>
        <h1 className='text-sm font-medium'>
          {online} <span className='font-normal'>Online</span>
        </h1>
        <span className='h-[10px] w-[10px] rounded-[50%] bg-green-500'></span>
      </div>
      <div className='flex items-center justify-around'>
        <div className='h-[50px] w-[50px] bg-slate-300 rounded-[50%]' />
        <p className='font-bold text-lg text-slate-800'>{title}</p>
      </div>
      <h6 className='font-medium text-xs text-slate-400 my-2'>Description</h6>
      <p className='text-sm text-slate-700'>{description}</p>
      <h6 className='font-medium text-xs text-slate-400 my-2'>Topics</h6>
      <div className='flex gap-2 flex-wrap justify-center mb-2'>
        {topics.map((topic) => (
          <span
            key={Math.random() * 1000}
            className=' bg-slate-200 rounded text-xs py-1 px-2 font-medium text-slate-700'
          >
            {topic.title}
          </span>
        ))}
      </div>
      <Button className='bg-blue-500 w-full hover:bg-blue-600'>Join Room</Button>
    </div>
  )
}

export default ChatRoomCard
