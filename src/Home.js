import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
   <Link to='/about'>  <h1>About Page</h1></Link> 
   <Link to='/contact'>  <h1>COntact Page</h1></Link> 
    </div>
  )
}

export default Home
