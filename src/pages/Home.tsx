import React from 'react'

import useWindowDimensions from '../components/hooks/useWindowDimensions'
import Header from '../components/Header'
import TopicCard from '../components/UI/TopicCard'

const dummyTopics = [
  { id: 1, topic: 'Food', rooms: 10 },
  { id: 2, topic: 'Animals', rooms: 15 },
  { id: 3, topic: 'Science', rooms: 23 },
  { id: 4, topic: 'History', rooms: 8 },
  { id: 5, topic: 'Gaming', rooms: 59 },
  { id: 6, topic: 'Movies', rooms: 42 },
  { id: 7, topic: 'Crypto', rooms: 36 },
  { id: 8, topic: 'Minecraft', rooms: 64 },
  { id: 9, topic: 'Music', rooms: 27 },
  { id: 10, topic: 'Anime', rooms: 77 },
]

const Home = () => {
  const width = useWindowDimensions()

  return (
    <div className='bg-[url(/images/dragon-scales.svg)] h-[390px]'>
      <Header />
      <div className='flex justify-center text-center py-4'>
        <h1 className='font-bold text-lg mx-4 text-yellow-300 sm:text-2xl'>
          Bored? Join room and talk with people according to your interest!
        </h1>
      </div>
      <h1 className=' text-center mx-auto mb-3 sm:text-start px-4 container font-bold text-white uppercase'>
        Explore Topics
      </h1>
      <div className='flex justify-center gap-4 mb-6 flex-wrap'>
        {dummyTopics
          .slice(
            ...(width <= 400
              ? [0, 2]
              : width <= 550
              ? [0, 3]
              : width <= 700
              ? [0, 4]
              : width <= 840
              ? [0, 5]
              : width <= 1000
              ? [0, 6]
              : width <= 1200
              ? [0, 7]
              : width <= 1300
              ? [0, 8]
              : width <= 1400
              ? [0, 9]
              : [0, 10]),
          )
          .map((data) => {
            return (
              <React.Fragment key={data.id}>
                <TopicCard topic={data.topic} rooms={data.rooms} />
              </React.Fragment>
            )
          })}
      </div>
      <div className='container mx-auto'>
        <select
          defaultValue='Popular'
          className='bg-transparent text-center text-white w-[110px] uppercase font-semibold outline-none '
        >
          <option value='Popular' className='bg-[gray] text-base'>
            Popular
          </option>
          <option value='Newest' className='bg-[gray] text-base'>
            Newest
          </option>
          <option value='Random' className='bg-[gray] text-base'>
            Random
          </option>
        </select>
      </div>
    </div>
  )
}

export default Home
