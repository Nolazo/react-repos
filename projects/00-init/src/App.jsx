import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {
  const formatUserName = (userName) => `@${userName}`

  const users = [
    {userName: 'Pepe', name: 'Jose', isFollowing: true},
    {userName: 'Migue', name: 'Miguel', isFollowing: false},
    {userName: 'Manu', name: 'Manuel', isFollowing: true},
  ]

  return (
    <section className='App'>
      {
        users.map(user =>{
          const {userName, name, isFollowing } = user

          return(
            <TwitterFollowCard
            key={`${userName}+`}
              userName={userName}
              isFollowing={isFollowing}
              >
              {name}
              <div>
                {formatUserName(userName)}
              </div>
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
