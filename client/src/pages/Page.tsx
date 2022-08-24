import React, { useEffect } from 'react'

type PageType = {
  title: string
  children: React.ReactNode
}

const Page = ({ title, children }: PageType) => {
  useEffect(() => {
    document.title = `${title} | Chatty`
    window.scrollTo(0, 0)
  }, [title])

  return <>{children}</>
}

export default Page
