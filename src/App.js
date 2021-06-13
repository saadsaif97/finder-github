import HeroArea from './components/layout/HeroArea'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <HeroArea />
      <Users />
    </div>
  )
}

export default App
