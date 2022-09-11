import React, { useState } from 'react'

import { useUserContext } from '../context/UserProvider'
import Header from '../components/Header'
import Page from './Page'
import ChatRoomCard from '../components/UI/ChatRoomCard'
import ChatBox from '../components/ChatBox'

const dummyRooms = [
  {
    id: 1,
    title: 'Ayaya Anime',
    description: 'Just a bunch of weebs',
    topics: [{ title: 'Anime' }, { title: 'Fun' }, { title: 'Weebs' }],
    online: 10,
  },
  {
    id: 2,
    title: 'Minecraft',
    description: 'Just a bunch of weebs',
    topics: [{ title: 'Gaming' }, { title: 'Fun' }],
    online: 23,
  },
  {
    id: 3,
    title: 'Ayaya Anime',
    description: 'Just a bunch of weebs',
    topics: [{ title: 'Anime' }, { title: 'Fun' }, { title: 'Weebs' }],
    online: 10,
  },
  {
    id: 4,
    title: 'Ayaya Anime',
    description: 'Just a bunch of weebs',
    topics: [{ title: 'Anime' }, { title: 'Fun' }, { title: 'Weebs' }],
    online: 10,
  },
  {
    id: 5,
    title: 'Ayaya Anime',
    description: 'Just a bunch of weebs',
    topics: [{ title: 'Anime' }, { title: 'Fun' }, { title: 'Weebs' }],
    online: 10,
  },
  {
    id: 6,
    title: 'Ayaya Anime',
    description: 'Just a bunch of weebs',
    topics: [{ title: 'Anime' }, { title: 'Fun' }, { title: 'Weebs' }],
    online: 10,
  },
]

const Chat = () => {
  const context = useUserContext()
  const username = context.username

  const [message, setMessage] = useState('')

  return (
    <Page title='Chat'>
      <div className='bg-gradient-to-b from-indigo-900 h-[300px]'>
        <Header />
        <div className='flex justify-center mt-14'>
          <div className=''>
            <h1 className='text-white font-bold text-3xl mb-6'>Ayaya Anime</h1>
            <div className='flex items-center gap-2 mb-6'>
              <div className='h-[60px] w-[60px] bg-slate-300 rounded-[50%]' />
              <h6 className='text-white text-xl font-semibold'>
                Tetsu <span className='text-sm font-normal'>- Room</span>
              </h6>
            </div>
            <ChatBox username={username} message={message} setMessage={setMessage} />
            <h1 className='text-white text-xl font-bold mt-8 mb-4'>Related Topics</h1>
            <div className='flex gap-2 mb-44'>
              <span className='cursor-pointer transform hover:-translate-y-1 duration-200 hover:bg-green-500 bg-green-400 rounded shadow-md py-2 px-4 font-semibold text-slate-800'>
                Anime
              </span>
              <span className='cursor-pointer transform hover:-translate-y-1 duration-200 hover:bg-green-500 bg-green-400 rounded shadow-md py-2 px-4 font-semibold text-slate-800'>
                One Piece
              </span>
              <span className='cursor-pointer transform hover:-translate-y-1 duration-200 hover:bg-green-500 bg-green-400 rounded shadow-md py-2 px-4 font-semibold text-slate-800'>
                Fun
              </span>
              <span className='cursor-pointer transform hover:-translate-y-1 duration-200 hover:bg-green-500 bg-green-400 rounded shadow-md py-2 px-4 font-semibold text-slate-800'>
                Weebs
              </span>
            </div>
          </div>
        </div>
        <h1 className='uppercase text-center mb-6 text-white text-lg font-semibold'>
          Explore Chats
        </h1>
        <div className='container mx-auto flex justify-center gap-4 flex-wrap'>
          {dummyRooms.map((room) => (
            <React.Fragment key={room.id}>
              <ChatRoomCard
                id={room.id}
                title={room.title}
                description={room.description}
                topics={room.topics}
                online={room.online}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default Chat
