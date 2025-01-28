import React from 'react'
import { initialLinks } from './lib/links'
import { LinkItem } from './types/link'
import { Profile } from './components/Profile'
import { LinkGrid } from './components/LinkGrid'
import { Footer } from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { faSchool } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [links, setLinks] = React.useState<LinkItem[]>(() => {
    const savedViews = localStorage.getItem('linkViews')
    if (savedViews) {
      const savedLinks = JSON.parse(savedViews)
      return initialLinks.map((link) => ({
        ...link,
        views: savedLinks[link.id] || 0,
      }))
    }
    return initialLinks
  })

  const handleLinkClick = (id: string) => {
    setLinks((prevLinks) => {
      const newLinks = prevLinks.map((link) =>
        link.id === id ? { ...link, views: link.views + 1 } : link
      )

      const viewsObject = newLinks.reduce(
        (acc, link) => ({
          ...acc,
          [link.id]: link.views,
        }),
        {}
      )
      localStorage.setItem('linkViews', JSON.stringify(viewsObject))

      return newLinks
    })
  }

  return (
    <>
      <Toaster />
      <div className='bg-[#0B1925] min-h-screen flex flex-col items-center'>
        <div className='w-full max-w-[800px] px-4 flex flex-col min-h-screen'>
          <div className='flex-1 py-8'>
            <Profile
              imageUrl='https://avatars.githubusercontent.com/u/80620802?s=400&u=9932e501d5c723936e92da977ac3fb7691417f73&v=4'
              name='Burak Boduroglu'
              bio='Software Engineer | TypeScript, Next.js, React Native'
            />
            <LinkGrid
              links={links}
              onLinkClick={handleLinkClick}
              featuredLink={{
                id: 'featured-1',
                title: 'Blogs & Tutorials',
                url: 'https://burakboduroglu.github.io/blogs-and-tutorials/',
                icon: faSchool,
                views: 0,
              }}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
