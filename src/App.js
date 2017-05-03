import React, { Component } from 'react'
import Logo from './logo'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Logo className='App-logo' alt='logo' />
          <h2>Salmon.</h2>
        </div>
        <p className='App-intro'>
          Who needs other colors.<br/>
          <b>One salmon..</b><br/>
          <i>Every situation.</i>
        </p>
      </div>
    )
  }
}

export default App
