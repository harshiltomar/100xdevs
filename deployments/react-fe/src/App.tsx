import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { NewCourses } from './components/NewCourses'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <NewCourses />
      </div>
    </>
  )
}

export default App