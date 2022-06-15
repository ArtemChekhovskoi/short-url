import React from 'react'
import {Link} from "react-router-dom"

function MainPage() {
  return (
    <div className='main-page-container main-content'>
      <h1 className='main-page-title'>
        Swear, someday i will make a beatiful main page, where you can read about all the features of this link shortener.
      </h1>
        <p className='main-page-text'>But for now you can simply <Link to="/signin">Sign in</Link> or <Link to="signup">Sign up</Link> if you already have an account here</p>
    </div>
  )
}

export default MainPage