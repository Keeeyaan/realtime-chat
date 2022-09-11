import { Link } from 'react-router-dom'

import Button from './Button'

type ChatRoomCardProps = {
  title: string
  id: string | number
  description: string
  topics: {
    title: string
  }[]
  online: number
}

const ChatRoomCard = ({ id, title, description, topics, online }: ChatRoomCardProps) => {
  return (
    <div className='transform transition-all duration-200 hover:-translate-y-1 min-h-[200px] w-[210px] shadow-md rounded'>
      <div className='w-full rounded-t bg-indigo-700 min-h-[90px] p-3'>
        <div className='flex justify-end items-center gap-2'>
          <h1 className='text-sm text-white font-semibold'>
            {online} <span className='font-normal'>Online</span>
          </h1>
          <span className='h-[10px] w-[10px] rounded-[50%] bg-green-500'></span>
        </div>
        <div className='flex items-center justify-around'>
          <div className='h-[50px] w-[50px] bg-blue-200 rounded-[50%]' />
          <p className='font-bold text-lg text-white'>{title}</p>
        </div>
      </div>
      <div className='bg-[#474a51] rounded-b p-3'>
        <h6 className='mb-2 font-medium text-xs text-slate-300'>Description</h6>
        <p className='text-sm text-gray-300'>{description}</p>
        <h6 className='font-medium text-xs text-slate-300 my-2'>Topics</h6>
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
        <Link to={`/chat/${id}`}>
          <Button className='bg-blue-500 w-full hover:bg-blue-600'>Join Room</Button>
        </Link>
      </div>
    </div>
  )
}

export default ChatRoomCard
