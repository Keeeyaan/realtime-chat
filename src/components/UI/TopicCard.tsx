type TopicCardProps = {
  topic?: string
  rooms?: number
}

const TopicCard = ({ topic, rooms }: TopicCardProps) => {
  return (
    <div className=' cursor-pointer w-[120px] text-center min-w-fit shadow-md transform transition-all ease-in-out duration-150 hover:-translate-y-1'>
      <div className=' h-[70px] rounded-t bg-blue-500' />
      <div className='min-h-[64px] bg-gray-700 rounded-b'>
        <h1 className='p-2 pb-0 font-semibold text-medium text-white'>{topic}</h1>
        <p className='pb-2 text-white font-light text-xs'>
          <span className='font-medium text-xs'>{rooms}</span> Rooms
        </p>
      </div>
    </div>
  )
}

export default TopicCard
