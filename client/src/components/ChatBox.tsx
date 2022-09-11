import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { io } from 'socket.io-client'

type ChatBoxProps = {
  username: string
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

interface messageListProps {
  id: number
  room: string
  user: string
  message: string
  time: Date
}

const socket = io('http://localhost:8000', { autoConnect: false })

const ChatBox = ({ username, message, setMessage }: ChatBoxProps) => {
  const { id: roomId } = useParams()

  const [messageList, setMessageList] = useState<messageListProps[]>([])

  const textChatHandler = (e: any) => {
    setMessage(e.target.value)
  }

  const sendMessage = async () => {
    if (message !== '') {
      const messageData = {
        id: Math.random(),
        room: roomId,
        user: username,
        message: message,
        time: new Date().toLocaleTimeString(),
      }
      await socket.emit('sendMessage', messageData)
      setMessageList((list: any) => [...list, messageData])
    }
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    sendMessage()
    setMessage('')
  }

  useEffect(() => {
    socket.open()
    socket.emit('joinRoom', roomId)

    return () => {
      socket.removeAllListeners()
      socket.close()
    }
  }, [roomId])

  useEffect(() => {
    socket.on('recieveMessage', (data) => {
      setMessageList((list: any) => [...list, data])
      console.log(data)
    })
  }, [socket])

  return (
    <>
      <div className='w-[900px] p-4 h-[550px] overflow-auto rounded-t bg-slate-900 shadow-lg'>
        {messageList.map((data) => (
          <div key={data.id} className='p-2 rounded bg-slate-600 max-w-fit mb-4'>
            <h6 className='text-blue-500 font-semibold text-sm pb-1'>
              {data.user} <span className='text-slate-300 font-light'> - 10:10pm </span>
            </h6>
            <h1 className='text-white'>{data.message}</h1>
          </div>
        ))}
      </div>
      <form onSubmit={submitHandler} className='flex'>
        <textarea
          value={message}
          onChange={textChatHandler}
          placeholder='Type something here...'
          className='h-[60px] w-full resize-none rounded-bl outline-none p-4'
        />
        <button
          type='submit'
          className='bg-blue-500 shadow-lg text-white text-sm w-[150px] py-2 px-4 rounded-br transition-all ease-in-out duration-300 font-semibold outline-none'
        >
          Send
        </button>
      </form>
    </>
  )
}

export default ChatBox
