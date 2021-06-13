import HeroArea from './components/layout/HeroArea'
import Navbar from './components/layout/Navbar'
import UserCard from './components/users/UserCard'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <HeroArea />
      <UserCard />
    </div>
  )
}

export default App
