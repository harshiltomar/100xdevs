import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { NewCourses } from './components/NewCourses'
import { ExistingCourses } from './components/ExistingCourses'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <NewCourses />
        <ExistingCourses />
      </div>
    </>
  )
}

export default App